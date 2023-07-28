import useCollageLoader from "../../../hooks/useCollageLoader";

const Collage = () => {
    const [collage] = useCollageLoader();
    console.log(collage)
    return (
        <div>

        </div>
    );
};

export default Collage;