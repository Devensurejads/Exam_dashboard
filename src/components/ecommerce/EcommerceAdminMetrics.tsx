import { BookIcon, GroupIcon, HeartBeatIcon, ServerIcon } from "../../icons";

export default function EcommerceAdminMetrics() {

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Active Exams
            </span>
            <h3 className="mt-2 font-bold text-primary text-title-md dark:text-white/90">
              12
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <BookIcon className="text-primary size-8 dark:text-primary/90" />
          </div>
        </div>
        <div className="pt-6">
          <p className="text-md text-black-700 dark:text-white-700">
            <span className="text-green">+3</span> vs Last Month
          </p>
        </div>
      </div>


      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Student Logins
            </span>
            <h3 className="mt-2 font-bold text-purple-700 text-title-md dark:text-white/90">
              12
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <GroupIcon className="text-purple size-8 dark:text-purple/90" />
          </div>
        </div>
        <div className="pt-6">
          <p className="text-md text-black-700 dark:text-white-700">
            <span className="text-green">+3</span> vs Last Month
          </p>
        </div>
      </div>


      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Participation Rate
            </span>
            <h3 className="mt-2 font-bold text-orange text-title-md dark:text-white/90">
              12
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <HeartBeatIcon className="text-orange size-8 dark:text-orange/90" />
          </div>
        </div>
        <div className="pt-6">
          <p className="text-md text-black-700 dark:text-white-700">
            <span className="text-green">+23%</span> effciency
          </p>
        </div>
      </div>


      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              System Status
            </span>
            <h3 className="mt-2 font-bold text-black-700 text-title-md dark:text-white/90">
              12
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <ServerIcon className="text-green size-8 dark:text-green/90" />
          </div>
        </div>
        <div className="pt-6">
          <p className="text-md text-black-700 dark:text-white-700">
            Across 5 Courses
          </p>
        </div>
      </div>
    </div>
  );
}
