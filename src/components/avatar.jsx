function Avatar() {
  return (
    <model-viewer
      src="/model.glb"
      alt="Lagon93"
      auto-rotate
      camera-controls
      style={{ 
        width: "400px", 
        height: "500px",
        filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))",
        borderRadius: "10px"
      }}
    />
  );
}

export default Avatar;
