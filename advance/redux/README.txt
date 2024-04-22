Local state: là những trạng thái thuộc riêng cho component: useState, useReduces
Cross-component state: là trạng thái dùng cho nhiều component
App-wise state: là state có thể truy cập ở mọi nơi trong app

So sánh redux và react context
Đều dùng để quản lý state
 
useContext dùng cho các app vừa và nhò
mỗi lần muốn share data cần .provide và nếu app với thì cần raasrt nhiều .provide và chỉ pass được từ component cha xuống con 
Redux

flow
component -> dispath -> action -> reducer func -> mutate state -> component

usage:
//Store
createStore()
//Component
useSelector: get value
useDispatch: change state