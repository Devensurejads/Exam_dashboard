import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon, ImportIcon, HeartBeatIcon, DatabaseIcon, SuccessIcon, AlertIcon, BookIcon, GroupIcon } from "../../icons";
import EcommerceAdminMetrics from "../../components/ecommerce/EcommerceAdminMetrics";
import AreaChartOne from "../../components/charts/area/AreaChartOne";

export default function AdminDashboard() {
  return (
    <>
      <PageMeta
        title="IMS"
        description="IMS"
      />

      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            Admin Dashboard
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Real-time system monitoring and overview
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<ImportIcon className="size-5" />}
            >
              Import Exam
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
          <EcommerceAdminMetrics />
        </div>

        <div className="col-span-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <HeartBeatIcon className="size-8 text-black-700 dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Student Participation Trends</h3>
              </div>
              <AreaChartOne />
            </div>


            {/* Paper Distribution */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <DatabaseIcon className="size-8 text-black-700 dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">System Performance</h3>
              </div>
              <div className="flex flex-col gap-6 mt-2">
                {/* AI Grading Accuracy */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">CPU Usage</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">75%</span>
                      <SuccessIcon className="size-5 text-primary" />
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                {/* Time Saved */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Memory</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">60%</span>
                      <AlertIcon className="size-5 text-orange" />
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                {/* Student Satisfaction */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Database</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">45%</span>
                      <SuccessIcon className="size-5 text-primary" />
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">API Response</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">98%</span>
                      <SuccessIcon className="size-5 text-green" />
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>




        <div className="col-span-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Recent Exam Activity</h3>


              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white/90">Advanced Mathematics Final</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">45 students | 2 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="ml-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md transition bg-primary hover:bg-primary px-4 py-2 text-md bg-primary text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">In Progress</button>
                  </div>
                </div>
              </div>


              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl mt-3">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white/90">Physics Midterm</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">78 students | 15 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="ml-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-md transition bg-green hover:bg-green px-4 py-2 text-md bg-green text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Configure</button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl mt-3">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white/90">Chemistry Quiz</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">32 students | 25 minutes ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="ml-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-orange hover:bg-orange px-4 py-2 text-md bg-orange text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Configure</button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl mt-3">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white/90">Biology Assessment</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">56 students | 1 hour ago</div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="ml-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-xl transition bg-primary hover:bg-primary px-4 py-2 text-md bg-primary text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300 ">Configure</button>
                  </div>
                </div>
              </div>
            </div>


            {/* Paper Distribution */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Quick Actions</h3>
              <div className="flex flex-col gap-3">
                {/* AI Grading Accuracy */}
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <BookIcon className="text-black size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">Create New Exam</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Set up a new examination</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <GroupIcon className="text-black size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">Manage Students</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Add or modify student accounts</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-white-700 rounded-full flex items-center justify-center">
                      <HeartBeatIcon className="text-black size-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white/90">View Reports</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Generate system reports</div>
                    </div>
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