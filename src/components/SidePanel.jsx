export default function SidePanel({ isOpen, onClose, children, widthClass = "w-2/5", position = "left" }) {
  const isRight = position === "right";
  const sideClass = isRight ? "right-0" : "left-0";
  const paddingClass = isRight ? "pl-[40px] pr-30" : " pr-[40px] pl-30";
  const translateClass = isRight ? (isOpen ? "translate-x-0" : "translate-x-full") : (isOpen ? "translate-x-0" : "-translate-x-full");
  return (
    <div
      className="black-overlay w-full h-full fixed px-2"
      style={{
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        zIndex: 9999999999999,
      }}
      onClick={onClose}
    >
      <div
        className={`${widthClass} h-full bg-white shadow-lg ${paddingClass} absolute ${sideClass} transform transition-transform duration-500 ease-in-out ${translateClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

