import { Html, useProgress } from "@react-three/drei";

const LoadingModal = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="loading-spinner"></div>
      <h3 className="modal-progress">{Math.round(progress)}%</h3>
    </Html>
  );
};

export default LoadingModal;
