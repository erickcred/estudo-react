import PropTypes from "prop-types";

const TaskSeparator = ({ title, icon, children }) => {
  return (
    <div className="space-y-3">
      <div
        className="flex items-center gap-1 text-[var(--secondary)]/60 
        pb-2 border-b border-solid border-b-[var(--secondary)]/20"
      >
        {icon}
        <p className="text-sm">{title}</p>
      </div>
      {children}
    </div>
  );
}

TaskSeparator.PropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  children: PropTypes.element
}
export default TaskSeparator;