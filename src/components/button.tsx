type Props = {
    type: 'submit' | 'button' | 'reset'
    text: string
    onClick?: () => void
}

const Button = ({ text, type, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            type={type || 'button'}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
            {text}
        </button>
    )
}

export default Button