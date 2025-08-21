import AreaChartOne from "../../components/charts/area/AreaChartOne";
import PageMeta from "../../components/common/PageMeta";
import EcommerceStudentMetrics from "../../components/ecommerce/EcommerceStudentMetrics";
import Button from "../../components/ui/button/Button";
import { BrainIcon, ChartIcon, CrossIcon, CupIcon, GoalIcon, GraphIcon, InfoIcon, RightIcon, SuccessIcon } from "../../icons";


export default function StudentDashboard() {
  return (
    <>
      <PageMeta
        title="IMS"
        description="IMS"
      />

      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            Good Evening, Deven!
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Ready to ace your exam?
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceStudentMetrics />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-4">
        {/* Left section */}
        <div className="col-span-12 xl:col-span-8">
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">Upcoming Exams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Standard University Format", tag: "Academic", sections: "4 Sections" },
                { title: "Multiple Choice Only", tag: "Quiz", sections: "7 Sections" },
                { title: "Mixed Format (MCQ + Essay)", tag: "Comprehensive", sections: "3 Sections" },
                { title: "Practical Exam Format", tag: "Laboratory", sections: "5 Sections" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md transition bg-gray-50 dark:bg-gray-900"
                >
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm mt-3">
                    <Button size="sm" variant="outline">{item.tag}</Button>
                    <p className="text-gray-600 dark:text-gray-400">{item.sections}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="col-span-12 xl:col-span-4 space-y-6">
          {/* Live Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
              Quick Actions
            </h2>
            <div className="flex items-center justify-between p-5 border border-primary rounded-xl hover:bg-primary group transition-colors duration-300">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <BrainIcon className="size-5 text-primary dark:text-primary group-hover:text-white" />
                  <div className="font-semibold text-primary dark:text-primary group-hover:text-white">
                    Start AI Study Session
                  </div>
                </div>
                <div>
                  <RightIcon className="size-8 text-primary dark:text-primary group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 border border-green rounded-xl hover:bg-green group transition-colors duration-300 mt-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <GoalIcon className="size-5 text-green dark:text-green group-hover:text-white" />
                  <div className="font-semibold text-green dark:text-green group-hover:text-white">
                    Start AI Study Session
                  </div>
                </div>
                <div>
                  <RightIcon className="size-8 text-green dark:text-green group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 border border-purple rounded-xl hover:bg-purple group transition-colors duration-300 mt-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2 items-center">
                  <GraphIcon className="size-5 text-purple dark:text-purple group-hover:text-white" />
                  <div className="font-semibold text-purple dark:text-purple group-hover:text-white">
                    View Performance
                  </div>
                </div>
                <div>
                  <RightIcon className="size-8 text-purple dark:text-purple group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-lg font-semibold text-gray-800 dark:text-white">Recent Activity</p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
              <div className="flex-1 rounded-xl border-1 border-gray-400 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <InfoIcon className="text-red-500 size-6" />
                    <span className="font-semibold text-md">Physics Exam Tomarrow</span>
                  </div>
                  <div>
                    <CrossIcon className="text-gray-500 size-6" />
                  </div>
                </div>
                <div className="text-gray-700 text-md">Your Physics - Mechanics exam is scheduled for tomorrow at 2:00 PM</div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">2 hours ago</p>
                  <p className="text-primary text-md">Mark as Read</p>
                </div>
              </div>
              <div className="flex-1 rounded-xl border-1 border-gray-400 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SuccessIcon className="text-green size-6" />
                    <span className="font-semibold text-md">Physics Exam Tomarrow</span>
                  </div>
                  <div>
                    <CrossIcon className="text-gray-500 size-6" />
                  </div>
                </div>
                <div className="text-gray-700 text-md">Your Physics - Mechanics exam is scheduled for tomorrow at 2:00 PM</div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">2 hours ago</p>
                  <p className="text-primary text-md">Mark as Read</p>
                </div>
              </div>
              <div className="flex-1 rounded-xl border-1 border-gray-400 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BrainIcon className="text-primary size-6" />
                    <span className="font-semibold text-md">Physics Exam Tomarrow</span>
                  </div>
                  <div>
                    <CrossIcon className="text-gray-500 size-6" />
                  </div>
                </div>
                <div className="text-gray-700 text-md">Your Physics - Mechanics exam is scheduled for tomorrow at 2:00 PM</div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">2 hours ago</p>
                  <p className="text-primary text-md">Mark as Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <ChartIcon className="size-6 text-primary dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Performance Trend</h3>
              </div>
              <AreaChartOne />
            </div>


            {/* Paper Distribution */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Recent Activity</h3>
              <div className="flex flex-col gap-3">
                {/* AI Grading Accuracy */}
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <CupIcon className="text-green size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">Chemistry - Organic</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Score: 85%</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 dark:text-white/90">2 Days ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <BrainIcon className="text-primary size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">AI Study Session - Calculus</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Duration: 45 min</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 dark:text-white/90">2 Days ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <GoalIcon className="text-purple size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">Physics Practice Problems</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Completed: 12 problems</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 dark:text-white/90">2 Days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}