import "./_index.scss";

const AngleDown = (props) => {
  const { ...rest } = props;
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7071 0.292892C14.0976 0.683416 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.32853 8.08568 6.71894 8.09893 6.32428 7.73715L0.324275 2.23715C-0.0828447 1.86396 -0.110348 1.23139 0.262845 0.824275C0.636038 0.417155 1.26861 0.389652 1.67572 0.762845L6.96992 5.61586L12.2929 0.292892C12.6834 -0.0976324 13.3166 -0.0976324 13.7071 0.292892Z"
      />
    </svg>
  );
};

export default AngleDown;
