import RegisterContent from "../../common/molecules/RegisterContent";
import { scale } from "../../../utils/Scale";


export const UserRegister: React.FC<{
    onOrganikChange: (value: string) => void;
    onNonOrganikChange: (value: string) => void;
    organikRp: number;
    nonOrganikRp: number;
  }> = ({ onOrganikChange, onNonOrganikChange, organikRp, nonOrganikRp }) => {
    return (
      <div
        style={{
          marginTop: `${scale(20)}px`,
        }}
      >
        <RegisterContent
          sampah_type="Sampah organik"
          rp={organikRp}
          onInputChange={onOrganikChange}
          label="Berat"
        />
        <RegisterContent
          sampah_type="Sampah non-organik"
          rp={nonOrganikRp}
          onInputChange={onNonOrganikChange}
          label="Berat"
        />
      </div>
    );
  };