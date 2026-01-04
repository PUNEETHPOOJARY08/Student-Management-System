import React, { useState, useEffect } from 'react';
import { Student } from './types/Student';
import { studentService } from './services/api';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<Student | undefined>(undefined);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await studentService.getAllStudents();
      setStudents(data);
    } catch (err) {
      setError('Failed to load students. Please check if the backend server is running.');
      console.error('Error loading students:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (studentData: Omit<Student, 'id'>) => {
    try {
      await studentService.createStudent(studentData);
      await loadStudents();
      setShowForm(false);
    } catch (err) {
      setError('Failed to create student. Please try again.');
      console.error('Error creating student:', err);
    }
  };

  const handleUpdate = async (studentData: Omit<Student, 'id'>) => {
    if (!editingStudent?.id) return;
    try {
      await studentService.updateStudent(editingStudent.id, studentData);
      await loadStudents();
      setShowForm(false);
      setEditingStudent(undefined);
    } catch (err) {
      setError('Failed to update student. Please try again.');
      console.error('Error updating student:', err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this student?')) {
      return;
    }
    try {
      await studentService.deleteStudent(id);
      await loadStudents();
    } catch (err) {
      setError('Failed to delete student. Please try again.');
      console.error('Error deleting student:', err);
    }
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingStudent(undefined);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🎓 Student Management System
              </h1>
              <p className="text-gray-600">Manage your student database efficiently</p>
            </div>
            <button
              onClick={() => {
                setEditingStudent(undefined);
                setShowForm(true);
              }}
              className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add New Student</span>
            </button>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Total Students: <span className="font-bold text-primary-600">{students.length}</span>
              </div>
              <button
                onClick={loadStudents}
                className="text-primary-600 hover:text-primary-700 flex items-center space-x-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading students...</p>
            </div>
          ) : (
            <StudentList
              students={students}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </main>

        {/* Student Form Modal */}
        {showForm && (
          <StudentForm
            student={editingStudent}
            onSubmit={editingStudent ? handleUpdate : handleCreate}
            onCancel={handleCancel}
          />
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-gray-600 text-sm">
        <p>© 2024 Student Management System. Built with React, TypeScript, Spring Boot & MySQL.</p>
      </footer>
    </div>
  );
};

export default App;

