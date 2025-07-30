import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { CapIcon, PlusIcon, ClockIcon, BrainIcon, CalendarIcon, FileIcon, GraphIcon, BookIcon, SuccessIcon, AlertIcon } from "../../icons";
import Badge from "../../components/ui/badge/Badge";

export default function Home() {
  return (
    <>
      <PageMeta
        title="IMS"
        description="IMS"
      />

      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            Welcome back, Deven Sureja
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Traxk income, expenses, and financial transactions
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<CapIcon className="size-5" />}
            >
              Gade Submissions
            </Button>
            <Button
              size="sm"
              variant="primary"
              startIcon={<PlusIcon className="size-5" />}
            >
              Create New Exam
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceMetrics />
        </div>

        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="mb-5">
              <span className="text-xl text-black-700 dark:text-white-700">
                Recent Activity
              </span>
            </div>

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
              <div className="flex items-center justify-center w-12 h-12 rounded-4xl dark:bg-gray-800"
                style={{ backgroundColor: "#E6FFEF" }}>
                <SuccessIcon className="size-7 text-green" />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <span className="text-md text-semibold dark:text-white-700">
                    Data Structures Medterm graded
                  </span>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    45 Students | Average : 82 | 15 minutes ago
                  </p>
                </div>
                <div>
                  <Badge
                    size="md"
                    color={"success"}
                  >
                    Completed
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
              <div className="flex items-center justify-center w-12 h-12 rounded-4xl dark:bg-gray-800"
                style={{ backgroundColor: "#DBEAFE" }}>
                <FileIcon className="size-7 text-primary" />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <span className="text-md text-semibold dark:text-white-700">
                    Algorithms Quiz generated
                  </span>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    20 questions | Medium Difficulty | 32 minutes ago
                  </p>
                </div>
                <div>
                  <Badge
                    size="md"
                    color={"info"}
                  >
                    AI Generated
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
              <div className="flex items-center justify-center w-12 h-12 rounded-4xl dark:bg-gray-800"
                style={{ backgroundColor: "#F5E8FF" }}>
                <BrainIcon className="size-7 text-purple" />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <span className="text-md text-semibold dark:text-white-700">
                    AI suggested improvements
                  </span>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    Database Design exam | 3 optimization tips | 1 minutes ago
                  </p>
                </div>
                <div>
                  <Badge
                    size="md"
                    color={"purple"}
                  >
                    AI Insight
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
              <div className="flex items-center justify-center w-12 h-12 rounded-4xl dark:bg-gray-800"
                style={{ backgroundColor: "#FFEAD3" }}>
                <AlertIcon className="size-7 text-orange" />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <span className="text-md text-semibold dark:text-white-700">
                    Manual review required
                  </span>
                  <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
                    Machine learning assignment | 3 submissions flagged | 2 hours ago
                  </p>
                </div>
                <div>
                  <Badge
                    size="md"
                    color={"yellow"}
                  >
                    Action Nedded
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-12 xl:col-span-12">
          <div className="rounded-2xl border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
              <div className="flex-1 rounded-xl border-2 border-red-400 bg-red-50 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center gap-2">
                  <ClockIcon className="text-red-500 size-6" />
                  <span className="font-semibold text-md text-red-700">Urgent: Grading Deadline</span>
                </div>
                <div className="text-gray-700 text-sm">Database system final exam grades due in 18 hours</div>
                <div>
                  <Button size="sm" variant="primary" className="bg-red-500 hover:bg-red-600">
                    Start Grading
                  </Button>
                </div>
              </div>
              <div className="flex-1 rounded-xl border-2 border-blue-300 bg-blue-50 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center gap-2">
                  <BrainIcon className="text-blue-500 size-6" />
                  <span className="font-semibold text-md text-blue-700">AI Suggestion</span>
                </div>
                <div className="text-gray-700 text-sm">Consider adding more practical questions to your next algorithm exam</div>
                <div>
                  <a href="#" className="text-blue-600 font-medium hover:underline text-sm">View Details</a>
                </div>
              </div>
              <div className="flex-1 rounded-xl border-2 border-green-300 bg-green-50 p-5 flex flex-col gap-3 min-w-[260px] max-w-full">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="text-green-600 size-6" />
                  <span className="font-semibold text-md text-green-700">Upcoming Exams</span>
                </div>
                <div className="text-gray-700 text-sm">Operating Systems midterm scheduled for tomarrow at 2:00 PM</div>
                <div>
                  <a href="#" className="text-green-600 font-medium hover:underline text-sm">View Exams</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom cards */}
        <div className="col-span-12 xl:col-span-12 flex gap-4">
          {/* Quick Actions */}
          <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between">
            <span className="text-xl font-medium text-black-700 dark:text-white-700 mb-6">Quick Actions</span>
            <div className="grid grid-cols-2 gap-8 mt-2">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-4xl dark:bg-gray-800"
                  style={{ backgroundColor: "#DBEAFE" }}>
                  <FileIcon className="size-10 text-primary" />
                </div>
                <span className="text-base font-medium text-gray-800 dark:text-white/90">Create Exam</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-4xl dark:bg-gray-800"
                  style={{ backgroundColor: "#F5E8FF" }}>
                  <CapIcon className="size-10 text-purple" />
                </div>

                <span className="text-base font-medium text-gray-800 dark:text-white/90">Grade Papers</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-4xl dark:bg-gray-800"
                  style={{ backgroundColor: "#E6FFEF" }}>
                  <GraphIcon className="size-10 text-green" />
                </div>
                <span className="text-base font-medium text-gray-800 dark:text-white/90">View Analytics</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-4xl dark:bg-gray-800"
                  style={{ backgroundColor: "#FFEAD3" }}>
                  <BookIcon className="size-10 text-orange" />
                </div>
                <span className="text-base font-medium text-gray-800 dark:text-white/90">Manage Exams</span>
              </div>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] flex flex-col justify-between">
            <span className="text-xl font-medium text-black-700 dark:text-white-700 mb-6">Performance Overview</span>
            <div className="flex flex-col gap-6 mt-2">
              {/* AI Grading Accuracy */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base text-gray-700 dark:text-white/90">AI Grading Accuracy</span>
                  <span className="text-green-600 font-semibold">94%</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div className="h-3 bg-blue-600 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              {/* Time Saved */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base text-gray-700 dark:text-white/90">Time Saved (This Month)</span>
                  <span className="text-blue-600 font-semibold">23h 45m</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div className="h-3 bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              {/* Student Satisfaction */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base text-gray-700 dark:text-white/90">Student Satisfaction</span>
                  <span className="text-purple-600 font-semibold">4.8/5</span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full">
                  <div className="h-3 bg-blue-600 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <a href="#" className="text-black-700 dark:text-white-700 font-semibold hover:underline text-md">View Detailed Reports</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
