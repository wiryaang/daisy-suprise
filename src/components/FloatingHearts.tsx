
function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 12 }, (_, i) => (
        <span
          key={i}
          className={`floating-heart heart-${i + 1}`}
        >
          ♡
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;
