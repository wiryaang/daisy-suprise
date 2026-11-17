
function Sparkles() {
  return (
    <div className="sparkles">
      {Array.from({ length: 16 }, (_, i) => (
        <span
          key={i}
          className={`sparkle sparkle-${i + 1}`}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export default Sparkles;
