import { insertData, getData, putData, deleteData } from './helper';

// Grading System API Service
export class GradingApiService {
  // Get pending grading assignments
  static async getPendingAssignments(filters?: {
    exam_id?: string;
    subject?: string;
    status?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/pending-assignments?${queryParams}` : 'api/v1/grading/pending-assignments';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching pending assignments:', error);
      throw error;
    }
  }

  // Grade a submission
  static async gradeSubmission(submissionId: string, gradingData: {
    score: number;
    feedback?: string;
    rubric_scores?: Record<string, number>;
    comments?: string;
    is_final?: boolean;
  }) {
    try {
      return await insertData(`api/v1/grading/grade-submission/${submissionId}`, gradingData, true);
    } catch (error) {
      console.error('Error grading submission:', error);
      throw error;
    }
  }

  // Get grades for a specific exam
  static async getExamGrades(examId: string) {
    try {
      return await getData(`api/v1/grading/grades/${examId}`, true);
    } catch (error) {
      console.error('Error fetching exam grades:', error);
      throw error;
    }
  }

  // Get grading statistics
  static async getGradingStats() {
    try {
      return await getData('api/v1/grading/grading-stats', true);
    } catch (error) {
      console.error('Error fetching grading statistics:', error);
      throw error;
    }
  }

  // Get student progress tracking
  static async getStudentProgress(studentId: string, filters?: {
    subject?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/student-progress/${studentId}?${queryParams}` : `api/v1/grading/student-progress/${studentId}`;
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching student progress:', error);
      throw error;
    }
  }

  // Bulk grading operations
  static async bulkGrade(bulkGradingData: {
    submission_ids: string[];
    rubric_template_id?: string;
    auto_grade?: boolean;
    grade_settings?: {
      partial_credit?: boolean;
      negative_marking?: boolean;
      time_bonus?: boolean;
    };
  }) {
    try {
      return await insertData('api/v1/grading/bulk-grade', bulkGradingData, true);
    } catch (error) {
      console.error('Error bulk grading:', error);
      throw error;
    }
  }

  // Get grading rubric templates
  static async getGradingRubrics() {
    try {
      return await getData('api/v1/grading/rubrics', true);
    } catch (error) {
      console.error('Error fetching grading rubrics:', error);
      throw error;
    }
  }

  // Create grading rubric
  static async createGradingRubric(rubricData: {
    name: string;
    description?: string;
    criteria: Array<{
      name: string;
      description: string;
      max_score: number;
      weight: number;
    }>;
    total_score: number;
    passing_threshold: number;
  }) {
    try {
      return await insertData('api/v1/grading/rubrics', rubricData, true);
    } catch (error) {
      console.error('Error creating grading rubric:', error);
      throw error;
    }
  }

  // Update grading rubric
  static async updateGradingRubric(rubricId: string, updateData: {
    name?: string;
    description?: string;
    criteria?: Array<{
      name: string;
      description: string;
      max_score: number;
      weight: number;
    }>;
    total_score?: number;
    passing_threshold?: number;
  }) {
    try {
      return await putData(`api/v1/grading/rubrics/${rubricId}`, updateData, true);
    } catch (error) {
      console.error('Error updating grading rubric:', error);
      throw error;
    }
  }

  // Delete grading rubric
  static async deleteGradingRubric(rubricId: string) {
    try {
      return await deleteData(`api/v1/grading/rubrics/${rubricId}`, true);
    } catch (error) {
      console.error('Error deleting grading rubric:', error);
      throw error;
    }
  }

  // Get grading history
  static async getGradingHistory(filters?: {
    grader_id?: string;
    exam_id?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/history?${queryParams}` : 'api/v1/grading/history';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching grading history:', error);
      throw error;
    }
  }

  // Recalculate grades for an exam
  static async recalculateExamGrades(examId: string, recalculationSettings?: {
    update_final_scores?: boolean;
    apply_curve?: boolean;
    curve_settings?: {
      target_mean?: number;
      target_std?: number;
    };
  }) {
    try {
      return await putData(`api/v1/grading/recalculate/${examId}`, recalculationSettings || {}, true);
    } catch (error) {
      console.error('Error recalculating exam grades:', error);
      throw error;
    }
  }

  // Export grading data
  static async exportGradingData(examId: string, format: 'pdf' | 'excel' | 'csv') {
    try {
      return await getData(`api/v1/grading/export/${examId}?format=${format}`, true);
    } catch (error) {
      console.error('Error exporting grading data:', error);
      throw error;
    }
  }

  // Get grading analytics
  static async getGradingAnalytics(filters?: {
    exam_id?: string;
    subject?: string;
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/analytics?${queryParams}` : 'api/v1/grading/analytics';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching grading analytics:', error);
      throw error;
    }
  }

  // Submit grading review request
  static async submitGradingReview(submissionId: string, reviewData: {
    reason: string;
    requested_changes?: string;
    priority: 'low' | 'medium' | 'high';
  }) {
    try {
      return await insertData(`api/v1/grading/submissions/${submissionId}/review-request`, reviewData, true);
    } catch (error) {
      console.error('Error submitting grading review:', error);
      throw error;
    }
  }

  // Get grading review requests
  static async getGradingReviewRequests(filters?: {
    status?: 'pending' | 'approved' | 'rejected';
    priority?: 'low' | 'medium' | 'high';
    date_from?: string;
    date_to?: string;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/grading/review-requests?${queryParams}` : 'api/v1/grading/review-requests';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching grading review requests:', error);
      throw error;
    }
  }
}
