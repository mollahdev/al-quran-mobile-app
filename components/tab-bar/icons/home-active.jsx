import Svg, { Path } from "react-native-svg"

export default function HomeActive(props) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.843 5.793c-3.112 2.26-4.667 3.39-5.278 5.06a5.82 5.82 0 00-.132.407c-.487 1.71.107 3.539 1.295 7.196 1.189 3.658 1.783 5.487 3.182 6.584.112.088.227.171.346.251 1.475.991 3.398.991 7.244.991 3.846 0 5.769 0 7.244-.991.119-.08.234-.163.346-.251 1.4-1.097 1.994-2.926 3.182-6.584 1.188-3.657 1.783-5.486 1.296-7.196a5.846 5.846 0 00-.133-.407c-.61-1.67-2.166-2.8-5.278-5.06-3.11-2.26-4.666-3.39-6.443-3.456a5.843 5.843 0 00-.428 0c-1.777.065-3.332 1.196-6.443 3.456zm4.324 14.122a.875.875 0 100 1.75h4.666a.875.875 0 100-1.75h-4.666z"
        fill="#42C83C"
      />
    </Svg>
  )
}
