const applications = [
  {
    companyName: "Pearl 10",
    role: "Frontend Developer",
    status: "Applied",
    Date: "2026-08-28"
  },

  {
    companyName: "Google",
    role: "Full stack Developer",
    status: "Applied",
    Date: "2026-08-20"
  },

  {
    companyName: "Microsoft",
    role: "AI Developer",
    status: "Applied",
    Date: "2026-08-18"
  },




]
export default function home(){
  return(
    <main className="min-h-screen p-8 bg-linear-to-r from-cyan-500 to-blue-500 ">
      <h1 className="text-3xl font-bold">Job Tracker</h1>
      <p className="mt-2 text-gray-900">My Job Applications</p>

      <div className="mt-6">
        {applications.map((app, index) =>(
          <div key={index} className="border-rounded-lg p-4 mb-5 bg-white">
            <h2 className="font-semibold text-lg text-blue-900">{app.companyName}</h2>
            <p className="text-gray-700">{app.role}</p>
            <span className="text-md bg-blue-500 mt-1">{app.status}: {app.Date}</span>
          </div>

        ))}

      </div>

    </main>
  );
}