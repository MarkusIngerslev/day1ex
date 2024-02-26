type ImageButtonProps = {
    onClick: () => void;
    image: string;
};

const ImageButton = ({ image, onClick }: ImageButtonProps) => {
    return (
        <>
            <button className="imageButton" onClick={onClick}>
                <img src={image} alt="Button" className="imageButtonSize" />
            </button>
        </>
    );
};

export default ImageButton;
