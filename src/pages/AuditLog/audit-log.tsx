import PageMeta from "../../components/common/PageMeta";
import Button from "../../components/ui/button/Button";
import { ImportIcon } from "../../icons";
import EcommerceAuditLogMetrics from "../../components/ecommerce/EcommerceAuditLogMetrics";
import Badge from "../../components/ui/badge/Badge";

export default function AuditLog() {
  const testData = [
    { user: "Dr. Priya Sharma", role: "Doctor", action: "Login", module: "Dashboard", timestamp: "2025-08-10 10:45", details: "Viewed stats", color: "success" },
    { user: "Raj Malhotra", role: "Nurse", action: "Update", module: "Patients", timestamp: "2025-08-10 09:20", details: "Updated patient record", color: "success" },
    { user: "Amit Kumar", role: "Admin", action: "Delete", module: "Users", timestamp: "2025-08-09 22:15", details: "Removed inactive account", color: "success" },
    { user: "Neha Patel", role: "Doctor", action: "Create", module: "Appointments", timestamp: "2025-08-09 19:05", details: "Scheduled new appointment", color: "success" },
    { user: "Vikram Singh", role: "Receptionist", action: "Login", module: "Dashboard", timestamp: "2025-08-09 17:00", details: "Checked appointments", color: "success" },
    { user: "Pooja Mehta", role: "Nurse", action: "Update", module: "Patients", timestamp: "2025-08-09 15:35", details: "Added prescription", color: "success" },
    { user: "Manish Jain", role: "Admin", action: "Update", module: "Settings", timestamp: "2025-08-09 14:10", details: "Changed password policy", color: "success" },
    { user: "Riya Kapoor", role: "Doctor", action: "Login", module: "Dashboard", timestamp: "2025-08-09 12:00", details: "Reviewed cases", color: "success" },
    { user: "Arjun Desai", role: "Receptionist", action: "Create", module: "Appointments", timestamp: "2025-08-09 10:45", details: "Booked patient slot", color: "success" },
    { user: "Simran Kaur", role: "Nurse", action: "Delete", module: "Patients", timestamp: "2025-08-09 09:25", details: "Removed duplicate record", color: "success" }
  ];
  return (
    <>
      <PageMeta
        title="IMS"
        description="IMS"
      />

      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            Audit Log
          </h2>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            System activity monitoring and security audit trail
          </p>
        </div>
        <div className="flex items-start w-full gap-3 sm:justify-end">
          <div className="flex items-center gap-5">
            <Button
              size="sm"
              variant="outline"
              startIcon={<ImportIcon className="size-5" />}
            >
              Download CSV
            </Button>
            <Button
              size="sm"
              variant="primary"
              startIcon={<ImportIcon className="size-5" />}
            >
              Export PDF
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <EcommerceAuditLogMetrics />
        </div>

        <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Filters</h3>
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 flex items-center gap-3">
                <div className="relative w-full md:w-full">
                  <input
                    type="text"
                    placeholder="Search Users, Actions Or.."
                    className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19L15 15M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                  <option>All Roles</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                  <option>All Actions</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Completed</option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <select className="w-full md:w-40 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 focus:outline-none">
                  <option>Today</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-12 space-y-6 xl:col-span-12">
          <div className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-200 dark:border-gray-800 p-4 md:p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-6">Active Log</h3>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 py-3 px-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400">
              <div className="col-span-2">USER</div>
              <div className="col-span-2">ROLE</div>
              <div className="col-span-2">ACTION</div>
              <div className="col-span-2">MODULE</div>
              <div className="col-span-2 text-center">TIMESTAMP</div>
              <div className="col-span-2 text-center">DETAILS</div>
            </div>

            {/* Table Rows */}
            {testData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:grid grid-cols-12 items-center py-4 px-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
              >
                <div className="col-span-2 w-full flex flex-col gap-1">
                  <span className="font-semibold text-gray-800 dark:text-white/90 text-base">{item.user}</span>
                </div>
                <div className="col-span-2 w-full flex items-center">
                  <span className="inline-block"><Badge color="success">{item.role}</Badge></span>
                </div>
                <div className="col-span-2 w-full flex items-center">
                  <span className="inline-block">{item.action}</span>
                </div>
                <div className="col-span-2 w-full flex items-center">
                  <span className="inline-block">{item.module}</span>
                </div>
                <div className="col-span-2 w-full flex items-center justify-center">
                  <span>{item.timestamp}</span>
                </div>
                <div className="col-span-2 w-full flex items-center justify-center">
                  <span>{item.details}</span>
                </div>
              </div>
            ))}
          </div>
        </div>



      </div>
    </>
  );
}