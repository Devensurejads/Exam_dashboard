import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { PlusIcon, ImportIcon, HeartBeatIcon, BookIcon, GroupIcon, GraphIcon, SuccessIcon, AlertIcon, DatabaseIcon } from "../../icons";
import EcommerceAnalyticsMetrics from "../../components/ecommerce/EcommerceAnalyticsMetrics";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PieChartOne from "../../components/charts/pie/PieChartOne";

export default function Analytics() {
  return (
    <>
      <PageMeta
        title="IMS"
        description="IMS"
      />

      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            System Analytics
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Comprehensive system performance and usage analytics
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
          <EcommerceAnalyticsMetrics />
        </div>

        <div className="col-span-12 mt-4">
          <div className="space-y-6 xl:col-span-12">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <GraphIcon className="size-6 text-primary dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Historical Growth Trend</h3>
              </div>
              <LineChartOne />
            </div>
          </div>
        </div>




        <div className="col-span-12 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Recent Exam Activity</h3>
              <PieChartOne />
            </div>


            {/* Paper Distribution */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <GraphIcon className="size-6 text-black-700 dark:text-white/90" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Feature Adoption Rates</h3>
              </div>
              <div className="flex flex-col gap-6 mt-2">
                {/* AI Grading Accuracy */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Auto Grading</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">75%</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                {/* Time Saved */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Question Bank</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">60%</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                {/* Student Satisfaction */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Real-time Monitor</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">45%</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Report Generation</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">98%</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base text-gray-700 dark:text-white/90">Student Analytics</span>
                    <div className="flex gap-1">
                      <span className="text-black font-normal dark:text-white/90">58%</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full">
                    <div className="h-3 bg-blue-600 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-4">
          <div className="space-y-6 xl:col-span-12">
            {/* Exam Link Generator */}
            <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
              <div className="flex gap-2">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Export Anlytics Report</h3>
              </div>
              <div className="flex items-start w-full gap-3 sm:justify-start">
                <div className="flex items-center gap-5">
                  <Button
                    size="sm"
                    variant="outline"
                    startIcon={<ImportIcon className="size-5" />}
                  >
                    Export as PDF
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    startIcon={<ImportIcon className="size-5" />}
                  >
                    Export as CSV
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    startIcon={<ImportIcon className="size-5" />}
                  >
                    Export as Excel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}