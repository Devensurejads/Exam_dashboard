import { insertData, getData, putData, deleteData } from './helper';

// Student Management API Service
export class StudentManagementApiService {
  // Get all students with filtering
  static async getStudents(filters?: {
    search?: string;
    status?: string;
    class?: string;
    section?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const queryParams = filters ? new URLSearchParams(filters as any).toString() : '';
      const endpoint = queryParams ? `api/v1/users/?${queryParams}` : 'api/v1/users/';
      return await getData(endpoint, true);
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  }

  // Get specific student details
  static async getStudent(studentId: string) {
    try {
      return await getData(`api/v1/users/${studentId}`, true);
    } catch (error) {
      console.error('Error fetching student details:', error);
      throw error;
    }
  }

  // Create new student
  static async createStudent(studentData: {
    username: string;
    email: string;
    full_name: string;
    role: string;
    class?: string;
    section?: string;
    roll_number?: string;
    phone?: string;
    address?: string;
  }) {
    try {
      return await insertData('api/v1/users/', studentData, true);
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  }

  // Update student information
  static async updateStudent(studentId: string, updateData: {
    full_name?: string;
    email?: string;
    class?: string;
    section?: string;
    roll_number?: string;
    phone?: string;
    address?: string;
  }) {
    try {
      return await putData(`api/v1/users/${studentId}`, updateData, true);
    } catch (error) {
      console.error('Error updating student:', error);
      throw error;
    }
  }

  // Delete student account
  static async deleteStudent(studentId: string) {
    try {
      return await deleteData(`api/v1/users/${studentId}`, true);
    } catch (error) {
      console.error('Error deleting student:', error);
      throw error;
    }
  }

  // Update student status (active/inactive/suspended)
  static async updateStudentStatus(studentId: string, status: 'active' | 'inactive' | 'suspended') {
    try {
      return await putData(`api/v1/users/${studentId}/status`, { status }, true);
    } catch (error) {
      console.error('Error updating student status:', error);
      throw error;
    }
  }

  // Sync student with IMS
  static async syncStudentWithIMS(studentId: string) {
    try {
      return await insertData(`api/v1/users/${studentId}/sync-ims`, {}, true);
    } catch (error) {
      console.error('Error syncing student with IMS:', error);
      throw error;
    }
  }

  // Sync all users from IMS
  static async syncAllUsersFromIMS() {
    try {
      return await insertData('api/v1/auth/sync-ims-users', {}, true);
    } catch (error) {
      console.error('Error syncing all users from IMS:', error);
      throw error;
    }
  }

  // Get student statistics
  static async getStudentStats() {
    try {
      return await getData('api/v1/users/stats', true);
    } catch (error) {
      console.error('Error fetching student statistics:', error);
      throw error;
    }
  }

  // Get students by class/section
  static async getStudentsByClass(className: string, section?: string) {
    try {
      const filters = { class: className, ...(section && { section }) };
      const queryParams = new URLSearchParams(filters).toString();
      return await getData(`api/v1/users/?${queryParams}`, true);
    } catch (error) {
      console.error('Error fetching students by class:', error);
      throw error;
    }
  }

  // Bulk update student status
  static async bulkUpdateStudentStatus(studentIds: string[], status: 'active' | 'inactive' | 'suspended') {
    try {
      return await putData('api/v1/users/bulk-status', { student_ids: studentIds, status }, true);
    } catch (error) {
      console.error('Error bulk updating student status:', error);
      throw error;
    }
  }

  // Get student exam assignments
  static async getStudentExamAssignments(studentId: string) {
    try {
      return await getData(`api/v1/users/${studentId}/exam-assignments`, true);
    } catch (error) {
      console.error('Error fetching student exam assignments:', error);
      throw error;
    }
  }

  // Assign exam to student
  static async assignExamToStudent(studentId: string, examId: string) {
    try {
      return await insertData(`api/v1/users/${studentId}/assign-exam`, { exam_id: examId }, true);
    } catch (error) {
      console.error('Error assigning exam to student:', error);
      throw error;
    }
  }

  // Remove exam assignment from student
  static async removeExamAssignment(studentId: string, examId: string) {
    try {
      return await deleteData(`api/v1/users/${studentId}/exam-assignments/${examId}`, true);
    } catch (error) {
      console.error('Error removing exam assignment:', error);
      throw error;
    }
  }
}
