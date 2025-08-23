import { insertData, getData, putData, deleteData } from './helper';

// Exam Management API Service
export class ExamManagementApiService {
  // Get all exams with filtering
  static async getExams(filters?: {
    search?: string;
    subject?: string;
    status?: string;
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/exams/?${queryParams}` : 'api/v1/exams/';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching exams:', error);
      throw error;
    }
  }

  // Get specific exam details
  static async getExam(examId: string) {
    try {
      return await getData(`api/v1/exams/${examId}`, true);
    } catch (error) {
      console.error('Error fetching exam details:', error);
      throw error;
    }
  }

  // Create new exam
  static async createExam(examData: {
    title: string;
    subject: string;
    topic: string;
    description?: string;
    duration: number;
    passing_score: number;
    total_marks: number;
    instructions?: string;
    scheduled_date?: string;
    questions: any[];
    difficulty_distribution?: {
      easy: number;
      medium: number;
      hard: number;
    };
  }) {
    try {
      return await insertData('api/v1/exams/', examData, true);
    } catch (error) {
      console.error('Error creating exam:', error);
      throw error;
    }
  }

  // Update exam
  static async updateExam(examId: string, updateData: {
    title?: string;
    subject?: string;
    topic?: string;
    description?: string;
    duration?: number;
    passing_score?: number;
    total_marks?: number;
    instructions?: string;
    scheduled_date?: string;
    questions?: any[];
    difficulty_distribution?: {
      easy: number;
      medium: number;
      hard: number;
    };
  }) {
    try {
      return await putData(`api/v1/exams/${examId}`, updateData, true);
    } catch (error) {
      console.error('Error updating exam:', error);
      throw error;
    }
  }

  // Delete exam
  static async deleteExam(examId: string) {
    try {
      return await deleteData(`api/v1/exams/${examId}`, true);
    } catch (error) {
      console.error('Error deleting exam:', error);
      throw error;
    }
  }

  // Get exam statistics
  static async getExamStats() {
    try {
      return await getData('api/v1/exams/stats', true);
    } catch (error) {
      console.error('Error fetching exam statistics:', error);
      throw error;
    }
  }

  // Schedule exam
  static async scheduleExam(examId: string, scheduleData: {
    scheduled_date: string;
    start_time: string;
    end_time: string;
    timezone?: string;
  }) {
    try {
      return await putData(`api/v1/exams/${examId}/schedule`, scheduleData, true);
    } catch (error) {
      console.error('Error scheduling exam:', error);
      throw error;
    }
  }

  // Publish exam
  static async publishExam(examId: string) {
    try {
      return await putData(`api/v1/exams/${examId}/publish`, {}, true);
    } catch (error) {
      console.error('Error publishing exam:', error);
      throw error;
    }
  }

  // Unpublish exam
  static async unpublishExam(examId: string) {
    try {
      return await putData(`api/v1/exams/${examId}/unpublish`, {}, true);
    } catch (error) {
      console.error('Error unpublishing exam:', error);
      throw error;
    }
  }

  // Get exam questions
  static async getExamQuestions(examId: string) {
    try {
      return await getData(`api/v1/exams/${examId}/questions`, true);
    } catch (error) {
      console.error('Error fetching exam questions:', error);
      throw error;
    }
  }

  // Add questions to exam
  static async addQuestionsToExam(examId: string, questionIds: string[]) {
    try {
      return await insertData(`api/v1/exams/${examId}/questions`, { question_ids: questionIds }, true);
    } catch (error) {
      console.error('Error adding questions to exam:', error);
      throw error;
    }
  }

  // Remove questions from exam
  static async removeQuestionsFromExam(examId: string, questionIds: string[]) {
    try {
      return await deleteData(`api/v1/exams/${examId}/questions`, true);
    } catch (error) {
      console.error('Error removing questions from exam:', error);
      throw error;
    }
  }

  // Get exam participants
  static async getExamParticipants(examId: string) {
    try {
      return await getData(`api/v1/exams/${examId}/participants`, true);
    } catch (error) {
      console.error('Error fetching exam participants:', error);
      throw error;
    }
  }

  // Add participants to exam
  static async addParticipantsToExam(examId: string, participantIds: string[]) {
    try {
      return await insertData(`api/v1/exams/${examId}/participants`, { participant_ids: participantIds }, true);
    } catch (error) {
      console.error('Error adding participants to exam:', error);
      throw error;
    }
  }

  // Remove participants from exam
  static async removeParticipantsFromExam(examId: string, participantIds: string[]) {
    try {
      return await deleteData(`api/v1/exams/${examId}/participants`, true);
    } catch (error) {
      console.error('Error removing participants from exam:', error);
      throw error;
    }
  }

  // Get exam results
  static async getExamResults(examId: string) {
    try {
      return await getData(`api/v1/exams/${examId}/results`, true);
    } catch (error) {
      console.error('Error fetching exam results:', error);
      throw error;
    }
  }

  // Export exam data
  static async exportExam(examId: string, format: 'pdf' | 'excel' | 'csv') {
    try {
      return await getData(`api/v1/exams/${examId}/export?format=${format}`, true);
    } catch (error) {
      console.error('Error exporting exam:', error);
      throw error;
    }
  }

  // Clone exam
  static async cloneExam(examId: string, newTitle: string) {
    try {
      return await insertData(`api/v1/exams/${examId}/clone`, { new_title: newTitle }, true);
    } catch (error) {
      console.error('Error cloning exam:', error);
      throw error;
    }
  }

  // Get exam templates
  static async getExamTemplates() {
    try {
      return await getData('api/v1/exams/templates', true);
    } catch (error) {
      console.error('Error fetching exam templates:', true);
      throw error;
    }
  }

  // Create exam from template
  static async createExamFromTemplate(templateId: string, examData: {
    title: string;
    subject: string;
    topic: string;
    scheduled_date?: string;
  }) {
    try {
      return await insertData(`api/v1/exams/templates/${templateId}/create`, examData, true);
    } catch (error) {
      console.error('Error creating exam from template:', error);
      throw error;
    }
  }
}
