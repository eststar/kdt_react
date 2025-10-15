const btStyles = {
  blue: {
    base: "bg-blue-500",
    hover: "hover:bg-blue-900"
  },
  red: {
    base: "bg-red-500",
    hover: "hover:bg-red-900"
  },
  green: {
    base: "bg-green-500",
    hover: "hover:bg-green-900"
  },
};

export default function TailButton({ bColor, caption, onHandle }) {  
  const btColorCss = `${btStyles[bColor].base} ${btStyles[bColor].hover} rounded text-white w-20 h-10`;

  return (
    <button className={btColorCss} onClick={onHandle}>{caption}</button>
  )
}
