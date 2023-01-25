import { toast } from "react-toastify";

export function showNotification(body, backgroundClass, position) {
  if (backgroundClass === "success") {
    toast.success(body, {
      theme: "colored",
      hideProgressBar: true,
      position: position || "top-right",
      autoClose: 2000,
      pauseOnHover: true,
    });
  } else {
    toast.error(body, {
      theme: "colored",
      hideProgressBar: true,
      position: position || "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
