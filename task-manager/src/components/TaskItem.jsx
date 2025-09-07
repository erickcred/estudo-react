export default function TaskItem({ status, children }) {
  const getTaskStatusClasses = () => {
    switch (status) {
      case "nostarted":
        return "";
      case "inprogress":
        return "bg-[#b8ae57]";
      case "finished":
        return "bg-[#00adb5]/50";
      default:
        return "bg-[#e9e9e9]";
    }
  };

  return (
    <p className={`${getTaskStatusClasses()} py-2 px-4 rounded-md`}>
      {children}
    </p>
  );
}
