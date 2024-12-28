import Svg, { Path } from "react-native-svg"

export default function HomeInactive(props) {
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
        d="M27.048 11.123l-.48.137.48-.137a6.386 6.386 0 00-.143-.441c-.344-.94-.948-1.704-1.835-2.508-.875-.792-2.06-1.652-3.594-2.768l-.025-.017-.024-.018c-1.535-1.115-2.72-1.976-3.743-2.563-1.04-.595-1.953-.934-2.952-.97a6.33 6.33 0 00-.464 0c-1 .036-1.913.375-2.952.97-1.023.587-2.208 1.448-3.743 2.563l-.024.018-.025.017C5.99 6.522 4.804 7.382 3.93 8.174c-.887.804-1.491 1.569-1.835 2.508a6.332 6.332 0 00-.143.441c-.274.962-.235 1.935.01 3.107.242 1.155.695 2.548 1.281 4.352l.01.029.009.029c.586 1.804 1.039 3.197 1.522 4.273.49 1.092 1.03 1.903 1.817 2.52.122.096.247.187.376.273.83.558 1.768.82 2.958.95 1.173.127 2.637.127 4.535.127h.06c1.897 0 3.362 0 4.535-.127 1.19-.13 2.128-.392 2.958-.95.129-.086.254-.177.376-.273.786-.617 1.327-1.428 1.817-2.52.483-1.076.936-2.469 1.522-4.273l.01-.03.009-.028c.586-1.804 1.039-3.197 1.28-4.352.246-1.172.285-2.145.011-3.107zM11.792 20.79c0-.207.168-.375.375-.375h4.666a.375.375 0 010 .75h-4.666a.375.375 0 01-.375-.375z"
        stroke="#737373"
        strokeLinecap="round"
      />
    </Svg>
  )
}