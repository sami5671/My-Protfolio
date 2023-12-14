import { FaFileDownload } from "react-icons/fa";
import ResumePDF from "../assets/Images/resume.pdf";
import Swal from "sweetalert2";

const ResumeButton = () => {
  const handleDownload = () => {
    Swal.fire({
      title: "Are you sure you want to Download?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = ResumePDF;
        link.download = "resume.pdf";
        link.click();

        Swal.fire({
          title: "Downloaded",
          text: "Your resume has been downloaded successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Download cancelled",
          icon: "info",
        });
      }
    });
  };
  return (
    <div>
      <button
        className="neno-button font-bold shadow-xl hover:shadow-lime-500 text-white hover:text-black border-2 hover:bg-lime-200 border-lime-500 rounded-lg py-3 px-6 uppercase relative overflow-hidden"
        onClick={handleDownload}
      >
        <div className="flex gap-4 items-center">
          <div>Resume</div>
          <div>
            <FaFileDownload />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ResumeButton;
