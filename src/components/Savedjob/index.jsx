import React from "react";
import { useJobContext } from "../../context/jobContext";
import JobCard from "../JobCard";

const Savedjob = () => {
  const { state } = useJobContext();

  return (
    <>
      <JobCard Jobdetails={state.jobs} />
      {state.jobs.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 130"
            aria-hidden="true"
            role="img"
            width="150px"
            height={"130px"}
          >
            <g clip-path="url(#clip0_12360_63878)">
              <path
                d="M72.332 61.848c-2.7-6.403-10.704-8.604-16.407-4.602-5.502 3.901-7.603 11.005-5.202 17.307l6.603 17.608c.7 1.901 2.9 2.702 4.702 1.901l17.007-8.003c6.103-2.902 9.505-9.505 8.304-16.108-1.3-6.903-8.604-10.904-15.007-8.103z"
                fill="url(#paint0_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M70.832 74.154c2.5-3.702 3.201-8.304 1.5-12.406-2.7-6.403-10.704-8.604-16.407-4.602-5.502 3.902-7.603 11.005-5.202 17.308l6.603 17.608c.3.7.7 1.2 1.2 1.6l12.306-19.508z"
                fill="url(#paint1_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M99.644 112.971H6.302c-.4 0-.8.4-.8.8s.4.8.8.8h93.442c.4 0 .801-.4.801-.8-.101-.5-.401-.8-.9-.8z"
                fill="url(#paint2_linear_12360_63878-uid-5)"
              ></path>
              <path
                d="M65.23 26.428h-.8c1.2 0 2.1 1.1 2.1 2.4v85.739h.801V28.829c.1-1.3-.9-2.401-2.101-2.401z"
                fill="#9CA897"
              ></path>
              <path
                d="M66.63 114.567V28.829c0-1.3-1-2.401-2.101-2.401H2.1c-1.1 0-2.101 1.1-2.101 2.4v85.739h66.63z"
                fill="url(#paint3_linear_12360_63878-uid-5)"
              ></path>
              <path
                d="M66.631 59.844c-1.9.1-3.902.8-5.602 2-5.503 3.902-7.604 11.006-5.203 17.308L62.43 96.86c.6 1.701 2.501 2.602 4.202 2.001V59.844z"
                fill="#C3D2C3"
              ></path>
              <path
                d="M32.516 67.348c9.172 0 16.607-7.436 16.607-16.608s-7.435-16.607-16.607-16.607-16.608 7.435-16.608 16.607 7.436 16.608 16.608 16.608z"
                fill="#C5D1C3"
              ></path>
              <path
                d="M36.316 53.84l-.7-5.002h-6.203l-.7 5.002h7.603z"
                fill="url(#paint4_linear_12360_63878-uid-5)"
              ></path>
              <path
                d="M32.516 51.941c1.9 0 3.702 1 3.702 1l-.3-1.9h-3.902l.5.9z"
                fill="url(#paint5_linear_12360_63878-uid-5)"
              ></path>
              <path
                d="M28.614 50.64l.1.1c1.1.7 2.3 1.101 3.702 1.101 1.4 0 2.8-.5 3.901-1.2a6.634 6.634 0 002.801-5.403c0-3.702-2.9-6.603-6.602-6.703-3.602 0-6.703 2.902-6.703 6.503 0 2.401 1.1 4.402 2.8 5.603z"
                fill="url(#paint6_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M46.722 55.743c-1.4-2.101-3.702-3.302-6.203-3.302-.7 0-1.3.1-2 .3l-1.801.5a15.704 15.704 0 01-8.604 0l-1.8-.5c-.601-.2-1.302-.3-2.002-.3-2.501 0-4.802 1.2-6.203 3.302-.4.6-.7 1.2-.9 1.8 2.601 5.803 8.404 9.905 15.107 9.905 6.703 0 12.605-4.102 15.106-9.904 0-.7-.3-1.3-.7-1.801z"
                fill="url(#paint7_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M16.207 80.357l-.7-2.001c0-.1 0-.3.1-.4l1.7-1.2c.3-.2.1-.701-.2-.701h-2.1c-.2 0-.301-.1-.301-.2l-.7-2.001c-.1-.3-.6-.3-.7 0l-.7 2c0 .1-.201.201-.301.201h-2.101c-.3 0-.5.4-.2.7l1.7 1.2c.1.1.2.301.1.401l-.7 2c-.1.301.3.601.6.401l1.701-1.2c.1-.1.3-.1.4 0l1.701 1.2c.5.2.8-.1.7-.4zm9.404 0l-.7-2.001c0-.1 0-.3.1-.4l1.7-1.2c.3-.2.1-.701-.2-.701h-2.1c-.2 0-.3-.1-.3-.2l-.701-2.001c-.1-.3-.6-.3-.7 0l-.7 2c0 .1-.2.201-.3.201h-2.102c-.3 0-.5.4-.2.7l1.701 1.2c.1.1.2.301.1.401l-.7 2c-.1.301.3.601.6.401l1.7-1.2c.1-.1.3-.1.4 0l1.702 1.2c.4.2.8-.1.7-.4zm9.404 0l-.7-2.001c0-.1 0-.3.1-.4l1.7-1.2c.3-.2.1-.701-.2-.701h-2.1c-.2 0-.3-.1-.3-.2l-.7-2.001c-.1-.3-.6-.3-.701 0l-.7 2c0 .1-.2.201-.3.201h-2.101c-.3 0-.5.4-.2.7l1.7 1.2c.1.1.2.301.1.401l-.7 2c-.1.301.3.601.6.401l1.701-1.2c.1-.1.3-.1.4 0l1.701 1.2c.4.2.8-.1.7-.4zm9.407 0l-.7-2.001c0-.1 0-.3.1-.4l1.7-1.2c.3-.2.1-.701-.2-.701h-2.101c-.2 0-.3-.1-.3-.2l-.7-2.001c-.1-.3-.6-.3-.7 0l-.701 2c0 .1-.2.201-.3.201h-2.101c-.3 0-.5.4-.2.7l1.7 1.2c.1.1.2.301.1.401l-.7 2c-.1.301.3.601.6.401l1.701-1.2c.1-.1.3-.1.4 0l1.701 1.2c.4.2.8-.1.7-.4zm9.302 0l-.7-2.001c0-.1 0-.3.1-.4l1.7-1.2c.3-.2.1-.701-.2-.701h-2.1c-.2 0-.3-.1-.3-.2l-.7-2.001c-.1-.3-.601-.3-.701 0l-.7 2c0 .1-.2.201-.3.201h-2.101c-.3 0-.5.4-.2.7l1.7 1.2c.1.1.2.301.1.401l-.7 2c-.1.301.3.601.6.401l1.701-1.2c.1-.1.3-.1.4 0l1.701 1.2c.5.2.8-.1.7-.4z"
                fill="#F4CE8B"
              ></path>
              <path
                d="M48.822 91.858H16.208c-.5 0-1.001-.4-1.001-1 0-.5.4-1 1-1h32.615c.5 0 1 .4 1 1 0 .5-.5 1-1 1zm0 7.504H16.208c-.5 0-1.001-.4-1.001-1 0-.5.4-1 1-1h32.615c.5 0 1 .4 1 1 0 .5-.5 1-1 1z"
                fill="#E771AC"
              ></path>
              <path
                d="M72.133 23.33c-1.1 1.3-1.801 3.101-1.801 5.002 0 3.702 2.601 6.803 6.303 7.504l25.711 4.902-.7.1c-8.904 1.3-17.108 5.902-22.81 12.806l-2.801 3.301a8.01 8.01 0 00-1.801 5.903c.3 3.901 3.401 6.903 7.303 7.303a8.11 8.11 0 008.504-6.103l.4-1.9 3.001-1.902c4.502-2.8 10.105-3.3 15.007-1.3 4.002 1.7 6.403 5.903 5.603 10.204-.801 4.703-5.103 8.004-9.905 7.604a27.35 27.35 0 01-8.904-2.401l-5.702-2.501c-1.901-.9-4.202-.9-6.103-.1-4.602 2-5.903 8.003-2.501 11.705 5.102 5.602 11.505 9.804 18.608 12.205l1.001.3c7.703 2.502 16.007 2.702 23.81.5 10.205-2.9 18.008-11.204 20.109-21.709 1.701-8.604-.7-17.508-6.503-24.21l-1.4-1.802a93.774 93.774 0 00-56.226-33.615c-4.201-.8-8.103 2.301-8.403 6.503.1.7.1 1.2.2 1.701z"
                fill="url(#paint8_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M102.245 40.739l-.7.1c-8.904 1.3-17.108 5.902-22.81 12.805l-2.701 3.302a8.01 8.01 0 00-1.801 5.902c.3 3.902 3.401 6.903 7.303 7.304a8.11 8.11 0 008.504-6.103l.4-1.9 3.001-1.902c4.502-2.801 10.105-3.301 15.007-1.3 4.002 1.7 6.403 5.902 5.603 10.204l14.606-22.11c-7.703-5.302-17.107-7.703-26.412-6.302z"
                fill="url(#paint9_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M113.75 70.252c-1.2 4.202-5.202 7.003-9.704 6.603-3.102-.3-6.103-1.1-8.904-2.401l-5.603-2.601c-1.9-.9-4.202-.9-6.103-.1-4.602 2-5.902 8.003-2.5 11.705 5.102 5.602 11.504 9.804 18.608 12.205l1 .3c7.704 2.502 16.007 2.702 23.811.5 9.304-2.6 16.607-9.804 19.409-19.008l-30.014-7.203z"
                fill="url(#paint10_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M70.332 28.33c0 3.703 2.601 6.804 6.303 7.504l25.711 4.902c9.305-1.3 18.709 1 26.312 6.503l2.201-3.901a88.816 88.816 0 00-19.008-13.006c-8.204-4.102-16.808-7.003-25.812-8.504l-6.803-1.1c-2.801-.5-5.502.6-7.203 2.6a8.37 8.37 0 00-1.701 5.003z"
                fill="url(#paint11_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M80.437 15.226c-4.202-.8-8.104 2.301-8.404 6.503 0 .5 0 1 .1 1.5 1.701-2 4.402-3.1 7.204-2.6l6.703 1.2c8.903 1.5 17.607 4.402 25.611 8.404a88.745 88.745 0 0126.312 20.409l-1.401-1.801c-14.006-17.508-34.015-29.513-56.125-33.615z"
                fill="url(#paint12_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M108.349 59.045c1.1.5 2.101 1.2 3.001 2L96.244 42.038c-.3.1-.7.2-1 .3l-4.703 19.81 3.001-1.902c4.302-2.801 9.905-3.301 14.807-1.2z"
                fill="url(#paint13_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M81.937 80.254c-.6 1.2-.8 2.501-.6 3.702 1.6 1.7 3.401 3.301 5.202 4.802 2.201.2 4.302-.9 5.403-2.901 1.5-2.802.5-6.203-2.201-7.804-2.802-1.6-6.203-.6-7.804 2.201z"
                fill="url(#paint14_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M81.937 80.254c-.6 1.2-.8 2.501-.6 3.702 1.6 1.7 3.401 3.301 5.202 4.802 2.201.2 4.302-.9 5.403-2.901 1.5-2.802.5-6.203-2.201-7.804-2.802-1.6-6.203-.6-7.804 2.201z"
                fill="url(#paint15_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M81.937 80.254c-.6 1.2-.8 2.501-.6 3.702 1.6 1.7 3.401 3.301 5.202 4.802 2.201.2 4.302-.9 5.403-2.901 1.5-2.802.5-6.203-2.201-7.804-2.802-1.6-6.203-.6-7.804 2.201z"
                fill="url(#paint16_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M84.838 77.754c1.5-.5 3.101-.4 4.502.4 2.801 1.5 3.802 5.002 2.2 7.803-.7 1.2-1.7 2.001-2.8 2.501 1.3-.4 2.5-1.3 3.301-2.7 1.5-2.802.5-6.204-2.2-7.804-1.702-.8-3.502-.9-5.003-.2z"
                fill="url(#paint17_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M86.04 21.83l-6.803-1.101c-.5-.1-1-.1-1.5-.1.2 1.1 2.8 2.3 6.302 2.901 3.402.6 6.303.3 6.903-.7-1.6-.4-3.201-.7-4.902-1z"
                fill="url(#paint18_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M91.842 18.128c-3.701-1.2-7.503-2.101-11.405-2.801-.4-.1-.9-.1-1.3-.1.6 1 2.901 2.3 5.902 3 3.102.701 5.903.601 6.803-.1z"
                fill="url(#paint19_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M86.04 21.83l-6.803-1.101c-.5-.1-1-.1-1.5-.1.2 1.1 2.8 2.3 6.302 2.901 3.402.6 6.303.3 6.903-.7-1.6-.4-3.201-.7-4.902-1z"
                fill="url(#paint20_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M91.842 18.128c-3.701-1.2-7.503-2.101-11.405-2.801-.4-.1-.9-.1-1.3-.1.6 1 2.901 2.3 5.902 3 3.102.701 5.903.601 6.803-.1z"
                fill="url(#paint21_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M86.04 21.83l-6.803-1.101c-.5-.1-1-.1-1.5-.1.2 1.1 2.8 2.3 6.302 2.901 3.402.6 6.303.3 6.903-.7-1.6-.4-3.201-.7-4.902-1z"
                fill="url(#paint22_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M84.139 23.23c-3.102-.5-5.503-1.6-6.103-2.601h-.2c.2 1.1 2.801 2.3 6.303 2.901 3.401.6 6.303.3 6.903-.7h-.2c-1 .7-3.702.9-6.703.4z"
                fill="url(#paint23_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M91.842 18.128c-3.701-1.2-7.503-2.101-11.405-2.801-.4-.1-.9-.1-1.3-.1.6 1 2.901 2.3 5.902 3 3.102.701 5.903.601 6.803-.1z"
                fill="url(#paint24_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M85.24 17.828c-2.702-.7-4.903-1.7-5.703-2.701h-.4c.6 1 2.901 2.301 5.902 3.001 3.102.8 5.903.7 6.803 0-.1 0-.1 0-.2-.1-1.1.6-3.701.5-6.402-.2z"
                fill="url(#paint25_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M87.339 69.851c-.1-.5-.2-.9-.3-1.3-1.5 1.1-3.502 1.8-5.503 1.6-3.901-.3-6.903-3.401-7.303-7.303v-1.6c-.6.1-1.3.3-1.9.6-2.702-6.403-10.706-8.604-16.408-4.602-5.502 3.901-7.603 11.005-5.202 17.307l6.603 17.608c.7 1.901 2.9 2.702 4.702 1.901l17.007-8.003c6.103-2.902 9.505-9.505 8.304-16.208z"
                fill="url(#paint26_radial_12360_63878-uid-5)"
              ></path>
              <path
                d="M70.832 74.154c2.5-3.702 3.201-8.304 1.5-12.406-2.7-6.403-10.704-8.604-16.407-4.602-5.502 3.902-7.603 11.005-5.202 17.308l6.603 17.608c.3.7.7 1.2 1.2 1.6l12.306-19.508z"
                fill="url(#paint27_radial_12360_63878-uid-5)"
              ></path>
            </g>
            <defs>
              <radialGradient
                id="paint0_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(17.78661 14.48993 -20.03996 24.59937 61.701 72.808)"
              >
                <stop offset=".677" stop-color="#E771AC"></stop>
                <stop offset=".801" stop-color="#D2649F"></stop>
                <stop offset="1" stop-color="#A94985"></stop>
              </radialGradient>
              <radialGradient
                id="paint1_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(15.75572 2.59322 -5.23293 31.79394 57.664 75.237)"
              >
                <stop
                  offset=".677"
                  stop-color="#A94884"
                  stop-opacity="0"
                ></stop>
                <stop offset="1" stop-color="#A94884"></stop>
              </radialGradient>
              <radialGradient
                id="paint6_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.998 43.088) scale(7.91354)"
              >
                <stop offset=".677" stop-color="#F8B0B2"></stop>
                <stop offset=".797" stop-color="#E69B9F"></stop>
                <stop offset="1" stop-color="#C17078"></stop>
              </radialGradient>
              <radialGradient
                id="paint7_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.606 52.418) scale(20.0546)"
              >
                <stop offset=".677" stop-color="#355CAA"></stop>
                <stop offset=".806" stop-color="#2D5095"></stop>
                <stop offset="1" stop-color="#1E3B6F"></stop>
              </radialGradient>
              <radialGradient
                id="paint8_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(19.30739 -34.92771 56.2545 31.09644 84.436 54.115)"
              >
                <stop offset=".385" stop-color="#BC5327"></stop>
                <stop offset=".593" stop-color="#BA5226"></stop>
                <stop offset=".694" stop-color="#B24E25"></stop>
                <stop offset=".771" stop-color="#A54822"></stop>
                <stop offset=".837" stop-color="#933F1D"></stop>
                <stop offset=".895" stop-color="#7B3417"></stop>
                <stop offset=".922" stop-color="#6D2D14"></stop>
              </radialGradient>
              <radialGradient
                id="paint9_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.07817 -21.28796 47.73818 .1753 116.454 60.427)"
              >
                <stop
                  offset=".385"
                  stop-color="#6D2D14"
                  stop-opacity="0"
                ></stop>
                <stop offset=".922" stop-color="#6D2D14"></stop>
              </radialGradient>
              <radialGradient
                id="paint10_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(13.14253 -14.57512 23.37856 21.08069 88.483 56.34)"
              >
                <stop offset=".385" stop-color="#6D2D14"></stop>
                <stop
                  offset=".922"
                  stop-color="#6D2D14"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <radialGradient
                id="paint11_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(-74.806 83.95 -43.538) scale(22.9768 63.3992)"
              >
                <stop
                  offset=".385"
                  stop-color="#6D2D14"
                  stop-opacity="0"
                ></stop>
                <stop offset=".922" stop-color="#6D2D14"></stop>
              </radialGradient>
              <radialGradient
                id="paint12_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(3.6284 -25.9654 64.12394 8.96068 102.091 37.73)"
              >
                <stop
                  offset=".385"
                  stop-color="#6D2D14"
                  stop-opacity="0"
                ></stop>
                <stop offset=".922" stop-color="#6D2D14"></stop>
              </radialGradient>
              <radialGradient
                id="paint13_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(10.18438 -3.29453 7.38783 22.83799 85.106 66.953)"
              >
                <stop offset=".385" stop-color="#6D2D14"></stop>
                <stop
                  offset=".922"
                  stop-color="#6D2D14"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
              <radialGradient
                id="paint14_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(6.60292 -7.32267 8.86501 7.99367 89.407 85.67)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint15_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(6.60292 -7.32267 8.86501 7.99367 91.34 87.147)"
              >
                <stop
                  offset=".426"
                  stop-color="#D5E0D5"
                  stop-opacity="0"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#D8E2D8"
                  stop-opacity=".563"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#E0E7E0"
                  stop-opacity=".903"
                ></stop>
                <stop offset="1" stop-color="#E4EAE4"></stop>
              </radialGradient>
              <radialGradient
                id="paint16_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(6.60288 -7.3227 8.86505 7.99362 96.95 91.873)"
              >
                <stop offset=".426" stop-color="#E4EAE4"></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".438"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".097"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint17_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(5.85218 -6.49009 7.85714 7.08487 92.95 85.901)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".219"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".049"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint18_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.90811 -4.69501 11.81158 2.2846 86.873 22.033)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint19_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.06616 -4.52154 10.2574 2.41866 88.804 16.633)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint20_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.90811 -4.69501 11.81158 2.2846 88.445 22.01)"
              >
                <stop
                  offset=".426"
                  stop-color="#D5E0D5"
                  stop-opacity="0"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#D8E2D8"
                  stop-opacity=".563"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#E0E7E0"
                  stop-opacity=".903"
                ></stop>
                <stop offset="1" stop-color="#E4EAE4"></stop>
              </radialGradient>
              <radialGradient
                id="paint21_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.06616 -4.52154 10.2574 2.41866 89.058 16.478)"
              >
                <stop
                  offset=".426"
                  stop-color="#D5E0D5"
                  stop-opacity="0"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#D8E2D8"
                  stop-opacity=".563"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#E0E7E0"
                  stop-opacity=".903"
                ></stop>
                <stop offset="1" stop-color="#E4EAE4"></stop>
              </radialGradient>
              <radialGradient
                id="paint22_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.90811 -4.69501 11.81158 2.2846 98.502 22.529)"
              >
                <stop offset=".426" stop-color="#E4EAE4"></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".438"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".097"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint23_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.90811 -4.69501 11.81158 2.2846 92.094 22.875)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".219"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".049"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint24_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.06616 -4.52154 10.2574 2.41866 98.233 18.244)"
              >
                <stop offset=".426" stop-color="#E4EAE4"></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".438"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".097"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint25_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(1.06616 -4.52154 10.2574 2.41866 90.897 17.425)"
              >
                <stop
                  offset=".426"
                  stop-color="#E4EAE4"
                  stop-opacity=".5"
                ></stop>
                <stop
                  offset=".749"
                  stop-color="#E1E8E1"
                  stop-opacity=".219"
                ></stop>
                <stop
                  offset=".944"
                  stop-color="#D9E3D9"
                  stop-opacity=".049"
                ></stop>
                <stop offset="1" stop-color="#D5E0D5" stop-opacity="0"></stop>
              </radialGradient>
              <radialGradient
                id="paint26_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(17.78661 14.48993 -20.03996 24.59937 61.701 72.808)"
              >
                <stop offset=".677" stop-color="#E771AC"></stop>
                <stop offset=".801" stop-color="#D2649F"></stop>
                <stop offset="1" stop-color="#A94985"></stop>
              </radialGradient>
              <radialGradient
                id="paint27_radial_12360_63878-uid-5"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(15.75572 2.59322 -5.23293 31.79394 57.664 75.237)"
              >
                <stop
                  offset=".677"
                  stop-color="#A94884"
                  stop-opacity="0"
                ></stop>
                <stop offset="1" stop-color="#A94884"></stop>
              </radialGradient>
              <linearGradient
                id="paint2_linear_12360_63878-uid-5"
                x1="5.484"
                y1="113.751"
                x2="100.464"
                y2="113.751"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C4D2C3" stop-opacity="0"></stop>
                <stop offset=".073" stop-color="#C4D2C3"></stop>
                <stop offset=".191" stop-color="#C4D2C3"></stop>
                <stop offset=".887" stop-color="#C4D2C3"></stop>
                <stop
                  offset="1"
                  stop-color="#C4D2C3"
                  stop-opacity=".014"
                ></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_12360_63878-uid-5"
                x1="33.308"
                y1="114.539"
                x2="33.308"
                y2="26.43"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E4EAE4"></stop>
                <stop offset=".614" stop-color="#E2E9E2"></stop>
                <stop offset=".892" stop-color="#DBE4DB"></stop>
                <stop offset="1" stop-color="#D5E0D5"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_12360_63878-uid-5"
                x1="28.709"
                y1="51.347"
                x2="36.341"
                y2="51.347"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".52" stop-color="#F8B0B2"></stop>
                <stop offset=".642" stop-color="#EEA5A8"></stop>
                <stop offset=".856" stop-color="#D5878D"></stop>
                <stop offset="1" stop-color="#C17078"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_12360_63878-uid-5"
                x1="34.116"
                y1="52.909"
                x2="34.116"
                y2="50.986"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A06069" stop-opacity="0"></stop>
                <stop offset="1" stop-color="#A06069"></stop>
              </linearGradient>
              <clipPath id="clip0_12360_63878-uid-5">
                <rect width="145" height="130" fill="#fff"></rect>
              </clipPath>
            </defs>
          </svg>
          <h3 style={{ width: "540px", textAlign: "center" ,color:"#5e6d55"}}>
            Keep track of jobs you're interested in. Select the heart icon on a
            job post to save it for later.
          </h3>
        </div>
      )}
    </>
  );
};

export default Savedjob;
