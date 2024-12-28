import Svg, { Path } from "react-native-svg"

export default function FavoriteActive(props) {
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
        d="M25.202 4.08c-3.006-3.066-6.486-1.773-8.641-.406-1.218.772-2.904.772-4.122 0-2.155-1.367-5.635-2.66-8.64.405-7.135 7.276 5.1 21.296 10.701 21.296 5.601 0 17.836-14.02 10.702-21.296z"
        fill="#42C83C"
      />
    </Svg>
  )
}
