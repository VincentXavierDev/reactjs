//Giống ref trong vue
useRef: trả về 1 object: {
    curent
}
Lợi ích: sinh ra để lấy giá trị của input: thay phải phải update onchange khi click lấy giá trị hiện tại của input: refVar.current.value
thay đổi giá trị bằng ref sẽ không re-render lại component

forwardRef

là 1 function
usage: wrap function mà muốn forward

Ví dụ tạo 1 biến ref như 1 prop xuống component con
biến ref tạo ở component cha và prop xuống component con
để thao tác với component con từ component cha cần forwardRef để đẩy component con lên

Ví dụ ở component con là 1 modal với built-in method: showModal()
nếu pass prop ref từ component cha thì khi sử dụng refVar.current.showModal() sẽ bị lỗi
=> sử dụng forwardRef

const Child = forwardRef(function Child(prop, ref){ // ref truyền ngoài ko truyên như prop mặc dù pass từ cha giống với prop
    return UI
})
export default Child