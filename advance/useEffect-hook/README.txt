Side effect
là những logic được thực thi ngoài phạm vi của commponent ví dụ call API,.. các hàm xử lý bất đồng bộ
Trong react mỗi khi thay đổi state thì sẽ render lại compoment nó xảy ra lỗi lặp vô tận render component => các hàm side effect vd call API  update lại state => render lại component =>.... lặp lại liên tục
Để giải quyết vấn đề này sử dụng useEffect() hook
usage: 
useEffect(() =>{
    //logic method here eg: call API
}, [])

// Nếu truyền mảng [] thì chỉ execute 1 lần sau khi mọi thứ đã finish
// Nếu truyền giá trị thì khi giá trị đó thay đổi hàm sẽ được re execute
// Nếu không có [] thì vẫn sẽ bị infinit loop

hook useEffect: sau khi component execution finish và sau khi JSX return thì các hàm trong hook useEffect mới chạy

// Dùng trong các trường hợp
+ Call API
+ Quản lý số lần render của component
+ Xử lý các hàm như setTimeout

// Khi truyền vào [] 1 function hoặc object sẽ làm cho hàm đó luôn luôn chạy lại do giá trị của function, object thay đổi sau mỗi lần render
để fix sử dụng hook: useCallback dùng giống với forwardRef