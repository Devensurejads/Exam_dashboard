import { insertData, getData, putData, deleteData } from './helper';

// Analytics API Service
export class AnalyticsApiService {
  // Get dashboard analytics for admin
  static async getAdminDashboardAnalytics() {
    try {
      return await getData('api/v1/analytics/admin-dashboard', true);
    } catch (error) {
      console.error('Error fetching admin dashboard analytics:', error);
      throw error;
    }
  }

  // Get dashboard analytics for faculty
  static async getFacultyDashboardAnalytics() {
    try {
      return await getData('api/v1/analytics/faculty-dashboard', true);
    } catch (error) {
      console.error('Error fetching faculty dashboard analytics:', error);
      throw error;
    }
  }

  // Get dashboard analytics for student
  static async getStudentDashboardAnalytics() {
    try {
      return await getData('api/v1/analytics/student-dashboard', true);
    } catch (error) {
      console.error('Error fetching student dashboard analytics:', error);
      throw error;
    }
  }

  // Get user statistics
  static async getUserStats(filters?: {
    role?: string;
    date_from?: string;
    date_to?: string;
    department?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/users/stats?${queryParams}` : 'api/v1/users/stats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching user statistics:', error);
      throw error;
    }
  }

  // Get exam statistics
  static async getExamStats(filters?: {
    subject?: string;
    date_from?: string;
    date_to?: string;
    status?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/exams/stats?${queryParams}` : 'api/v1/exams/stats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching exam statistics:', error);
      throw error;
    }
  }

  // Get AI generation analytics
  static async getAIGenerationAnalytics(filters?: {
    subject?: string;
    topic?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/ai-generator/analytics/dashboard?${queryParams}` : 'api/v1/ai-generator/analytics/dashboard';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching AI generation analytics:', error);
      throw error;
    }
  }

  // Get grading statistics
  static async getGradingStats(filters?: {
    exam_id?: string;
    subject?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/grading-stats?${queryParams}` : 'api/v1/grading/grading-stats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching grading statistics:', error);
      throw error;
    }
  }

  // Get knowledge base statistics
  static async getKnowledgeStats(filters?: {
    subject?: string;
    category?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/knowledge/stats?${queryParams}` : 'api/v1/knowledge/stats';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching knowledge base statistics:', error);
      throw error;
    }
  }

  // Get student performance analytics
  static async getStudentPerformanceAnalytics(filters?: {
    student_id?: string;
    subject?: string;
    class?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/analytics/student-performance?${queryParams}` : 'api/v1/analytics/student-performance';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching student performance analytics:', error);
      throw error;
    }
  }

  // Get exam results analytics
  static async getExamResultsAnalytics(filters?: {
    exam_id?: string;
    subject?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/analytics/exam-results?${queryParams}` : 'api/v1/analytics/exam-results';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching exam results analytics:', error);
      throw error;
    }
  }

  // Get class statistics
  static async getClassStatistics(filters?: {
    class_name?: string;
    section?: string;
    subject?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/analytics/class-statistics?${queryParams}` : 'api/v1/analytics/class-statistics';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching class statistics:', error);
      throw error;
    }
  }

  // Get system performance metrics
  static async getSystemPerformanceMetrics() {
    try {
      return await getData('api/v1/system/performance', true);
    } catch (error) {
      console.error('Error fetching system performance metrics:', error);
      throw error;
    }
  }

  // Get IMS integration status
  static async getIMSIntegrationStatus() {
    try {
      return await getData('api/v1/ims/status', true);
    } catch (error) {
      console.error('Error fetching IMS integration status:', error);
      throw error;
    }
  }

  // Get audit logs for analytics
  static async getAuditLogs(filters?: {
    user_id?: string;
    action?: string;
    date_from?: string;
    date_to?: string;
    severity?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/audit/logs?${queryParams}` : 'api/v1/audit/logs';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching audit logs:', error);
      throw error;
    }
  }

  // Get audit events for analytics
  static async getAuditEvents(filters?: {
    event_type?: string;
    user_id?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/audit/events?${queryParams}` : 'api/v1/audit/events';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching audit events:', error);
      throw error;
    }
  }

  // Export analytics reports
  static async exportAnalyticsReport(reportType: string, format: 'pdf' | 'excel' | 'csv', filters?: {
    date_from?: string;
    date_to?: string;
    subject?: string;
    class?: string;
    user_id?: string;
  }) {
    try {
      const exportParams = { report_type: reportType, format, ...filters };
      const queryParams = new URLSearchParams(exportParams as any).toString();
      return await getData(`api/v1/analytics/export-reports?${queryParams}`, true);
    } catch (error) {
      console.error('Error exporting analytics report:', error);
      throw error;
    }
  }

  // Get real-time system metrics
  static async getRealTimeMetrics() {
    try {
      return await getData('api/v1/system/real-time-metrics', true);
    } catch (error) {
      console.error('Error fetching real-time metrics:', error);
      throw error;
    }
  }

  // Get system health status
  static async getSystemHealthStatus() {
    try {
      return await getData('api/v1/system/health', true);
    } catch (error) {
      console.error('Error fetching system health status:', error);
      throw error;
    }
  }

  // Get notification analytics
  static async getNotificationAnalytics(filters?: {
    type?: string;
    user_id?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/notifications/analytics?${queryParams}` : 'api/v1/notifications/analytics';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching notification analytics:', error);
      throw error;
    }
  }

  // Get user activity analytics
  static async getUserActivityAnalytics(filters?: {
    user_id?: string;
    action_type?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/analytics/user-activity?${queryParams}` : 'api/v1/analytics/user-activity';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching user activity analytics:', error);
      throw error;
    }
  }
}
