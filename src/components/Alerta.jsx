export default function Alerta({children}) {

    const handleChildren = () => {

        return children.length >  0 
        ? 'relative text-center my-2 bg-red-100 text-red-800 font-bold p-3 border border-red-500' 
        : 'h-10'
    }

    return (
        <div className={handleChildren()}>
            {children}
        </div>
    )
}