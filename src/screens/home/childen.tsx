
import { Switch } from 'antd';

const FilhoHome = ( props: any ) => {
  var { valor, testeFunc } = props;
  return (
    <>
      <div>
        filho: { valor }
        <button type="button"onClick={()=>testeFunc(valor++)}>
          click
        </button>
        <Switch />
      </div>
    </>
  )
}

export default FilhoHome;