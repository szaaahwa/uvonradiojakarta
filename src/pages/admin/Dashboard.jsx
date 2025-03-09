import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import axios from "axios";


const Dashboard = () => {
  const [request, setRequest] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [mostRequestedSong, setMostRequestedSong] = useState("");

  useEffect(() => {
    const fetchAllRequest = async () => {
      try {
        const res = await axios.get("http://uvon.test/request/request.php");
        if (res.data && Array.isArray(res.data.request)) {
          const requests = res.data.request;
          setRequest(requests);
          setTotalCount(requests.length);

          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          oneWeekAgo.setHours(0, 0, 0, 0);

          const dailyRequests = requests.filter((req) => {
            const requestDate = new Date(req.time_stamp);
            requestDate.setHours(0, 0, 0, 0);
            return requestDate.getTime() === today.getTime();
          });
          console.log(today.getTime());

          const weeklyRequests = requests.filter((req) => {
            const requestDate = new Date(req.time_stamp);
            requestDate.setHours(0, 0, 0, 0);
            return requestDate.getTime() >= oneWeekAgo.getTime();
          });

          setDailyCount(dailyRequests.length);
          setWeeklyCount(weeklyRequests.length);

          const songCount = {};
          requests.forEach((req) => {
            if (req.requested_song) {
              songCount[req.requested_song] =
                (songCount[req.requested_song] || 0) + 1;
            }
          });
          const mostRequested = Object.keys(songCount).reduce(
            (a, b) => (songCount[a] > songCount[b] ? a : b),
            ""
          );
          setMostRequestedSong(mostRequested);
        } else {
          console.error("Invalid response format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchAllRequest();
  }, []);
  const [listeners, setListeners] = useState(0);

  useEffect(() => {
    const fetchListeners = async () => {
      try {
        const response = await axios.get('https://sapircast.caster.fm:19468/status-json.xsl');
        const data = response.data;
        const activeListeners = data.icestats.source.listeners;
        setListeners(activeListeners);
      } catch (error) {
        console.error('Error fetching listener data:', error);
      }
    };

    fetchListeners();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row bg-black h-screen font-sans overflow-auto">
        <div className="flex-1 p-5 w-full md:ml-50">
          <div className="flex justify-center gap-5 text-white mb-5">
            <div className="bg-[#252525] p-4 rounded-lg">
              <p className="font-bold text-lg">Total Pendengar Saat ini </p>
              <p className="text-2xl font-bold">{listeners}</p>
            </div>
            <div className="bg-[#252525] p-4 rounded-lg">
              <p className="font-bold text-lg">Total Request </p>
              <p className="text-2xl font-bold">{totalCount}</p>
            </div>
            <div className="bg-[#252525] p-4 rounded-lg ">
              <p className="font-bold text-lg">Lagu Paling Diminta</p>
              <p className="text-2xl font-bold">{mostRequestedSong || "-"}</p>
            </div>
          </div>
          <div className="px-5 py-5 bg-[#252525] rounded overflow-y-scroll h-100">
            {request.length > 0 ? (
              request.map((req, index) => (
                <div key={index} className="mb-2 flex gap-5">
                  <p className="text-white">{req.time_stamp}</p>
                  <div className="flex flex-col w-200">
                    <p className="text-white">
                      Request dari {req.nama} di {req.asal}. {req.nama} ingin
                      mengirim salam untuk {req.salam_untuk} dengan pesannya:
                    </p>
                    <p className="text-white font-bold">{req.pesan}</p>
                    <p className="text-white">
                      Requested song: {req.requested_song}{" "}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">Tidak ada request tersedia.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
