import { CalendarIcon, ClockIcon, FileIcon, GroupIcon } from "../../icons";

export default function ExamManagmentMetrics() {

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-6">
      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Active Exams
            </span>
            <h3 className="mt-2 font-bold text-black-700 text-title-md dark:text-white/90">
              12
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <ClockIcon className="size-8 text-green dark:text-white/90" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Scheduled
            </span>
            <h3 className="mt-2 font-bold text-black-700 text-title-md dark:text-white/90">
              7
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <CalendarIcon className="text-primary size-8 dark:text-white/90" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Total Students
            </span>
            <h3 className="mt-2 font-bold text-black-700 text-title-md dark:text-white/90">
              287
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <GroupIcon className="text-purple size-8 dark:text-white/90" />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-black-700 dark:text-white-700">
              Submission Today
            </span>
            <h3 className="mt-2 font-bold text-black-700 text-title-md dark:text-white/90">
              156
            </h3>
          </div>

          <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-4xl dark:bg-gray-800">
            <FileIcon className="text-orange size-8 dark:text-white/90" />
          </div>
        </div>
      </div>

    </div>
  );
}
