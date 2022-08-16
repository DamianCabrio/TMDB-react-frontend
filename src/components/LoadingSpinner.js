const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
      <span className="d-flex justify-content-center mt-2">Loading...</span>
    </>
  );
};

export default LoadingSpinner;
