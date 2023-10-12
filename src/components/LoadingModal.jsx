import { Html, useProgress } from "@react-three/drei";

// function Loader() {
//     const { progress } = useProgress();
//     return <Html center>{progress}%</Html>;
//   }

const LoadingModal = () => {
    const { progress } = useProgress();
  return (
    <Html>
    {/* <div className="modal" id="modal-loading" data-backdrop="static">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body text-center">
            <div className="loading-spinner mb-2" style={{alignItems: center}}>
                <h3 className="careerpage-heading-4">{progress}%</h3>
            </div>
            // <div>Loading</div>
          </div>
        </div>
      </div>
    </div> */}
    <div className="loading-spinner mb-2">
                <h3 className="careerpage-heading-4">{progress}%</h3>
            </div>
    </Html>
  );
};

export default LoadingModal;
