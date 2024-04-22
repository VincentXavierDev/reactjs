 Để tránh việc re execute không mong muốn thì sử dụng memo

 memo() so sánh giá trị của prop
 Nếu giá trị prop không thay đổi thì sẽ ko execute component

 usage: memo dùng cho component

const child = memo(function child({value}) {
//logic in here
})

export default child

memo(): dùng cho function component
useMemo() hook: dùng cho function bình thường 
usage: useMemo(() => method(arg), [arg])

optimize code with millionJS
