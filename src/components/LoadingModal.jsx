import { Html } from "@react-three/drei";

const LoadingModal = () => {
  return (
    <Html>
    <div className="modal" id="modal-loading" data-backdrop="static">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body text-center">
            <div className="loading-spinner mb-2"></div>
            {/* <div>Loading</div> */}
          </div>
        </div>
      </div>
    </div>
    </Html>
  );
};

export default LoadingModal;
