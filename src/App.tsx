import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollToTop } from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Dashboard/home";
import ExamManagment from "./pages/ExamManagment/ExamManagment";
import Grading from "./pages/Grading/Grading";
import StudentManagement from "./pages/StudentManagement/StudentManagement";
import QuestionGenerator from "./pages/QuestionGenerator/QuestionGenerator";
import axios from "axios";
import { API_URL } from "./config/config";
import { useEffect, useRef } from "react";

export default function App() {
  const hasRun = useRef(false);

  const token = async (): Promise<string | null> => {
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/login`,
        {
          username: "staff2",
          password: "test123#",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..."
          },
        }
      );

      console.log("Login success:", response.data);
      return response.data;

    } catch (err: any) {
      console.error("Failed to login:", err.response?.data || err.message);
      return null;
    }
  };

  useEffect(() => {
    if (!hasRun.current) {
      token();
      hasRun.current = true;
    }
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/exam-management" element={<ExamManagment />} />
            <Route path="/grading" element={<Grading />} />
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/question-generator" element={<QuestionGenerator />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
