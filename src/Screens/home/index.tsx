import PropTypes from 'prop-types';

const Home = (props:any) => {
  // const [value_, setValue_] = useState(1);

  // const teste = (vlr:number) => {
  //   setValue_(vlr);
  // };
  console.log(props);
  const { dataHome, getDataHome } = props;

  const searchDataHome = () => {
    getDataHome('{ page: home}121');
  };
  console.log('dados home', dataHome);

  return (
    <>
      {/* <FilhoHome valor={value_} testeFunc={teste} /> */}
      {/* pai : {value_} */}
      <button type="button" onClick={() => searchDataHome()}> Busca dados</button>
      <div>
        Pagine Home
      </div>
    </>
  );
};

export default Home;

Home.propTypes = {
  dataHome: PropTypes.string.isRequired,
  getDataHome: PropTypes.func.isRequired,
};
