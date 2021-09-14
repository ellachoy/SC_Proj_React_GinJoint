import './SectionEins.css'


// sfc
const SectionEins = (props) => {
    return (
        <section className="SectionEins">
            <p>{props.Classic}</p>
            <p>{props.Gin}</p>
            <p>{props.city}</p>
        </section>
    );
}
 
export default SectionEins;



