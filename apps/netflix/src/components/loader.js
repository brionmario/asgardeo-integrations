import { Oval } from  "react-loader-spinner";

export const Loader = () => {

  return (
    <div className="loader-wrapper">
      <Oval
        height="50"
        width="50"
        color="white"
        ariaLabel="loading"
        secondaryColor="#e50914"
      />
    </div>
  );
};
