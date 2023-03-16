import { useAuthContext } from "./../../context/AuthContext";
const Logout = () => {
  const { logout } = useAuthContext();

  return (
      <li onClick={logout}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          aria-hidden="true"
          viewBox="0 0 24 24"
          role="img"
          style={{ verticalAlign: "middle", width: "20px" }}
        >
          <path
            vector-effect="non-scaling-stroke"
            stroke="var(--icon-color, #001e00)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M5.8 5.8c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3h-8c-1.7 0-3-1.3-3-3m8-6h-10"
          ></path>
          <path
            vector-effect="non-scaling-stroke"
            stroke="var(--icon-color, #001e00)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1.5"
            d="M7.8 7.8l-4 4 4 4"
          ></path>
        </svg>
        Log out
      </li>
  );
};

export default Logout;
