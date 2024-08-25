import RegisterContent from "../../common/molecules/RegisterContent";
import { scale } from "../../../utils/Scale";

export const AdminRegister: React.FC<{
    onOrganikChange: (value: string) => void;
    onNonOrganikChange: (value: string) => void;
    organikRp: null;
    nonOrganikRp: null;
  }> = ({ onOrganikChange, onNonOrganikChange, organikRp, nonOrganikRp }) => {
    return (
      <div
        style={{
          marginTop: `${scale(60)}px`,
        }}
      >
        <RegisterContent
          sampah_type="Sampah organik"
          rp={organikRp}
          onInputChange={onOrganikChange}
          label="RP"
        />
        <RegisterContent
          sampah_type="Sampah non-organik"
          rp={nonOrganikRp}
          onInputChange={onNonOrganikChange}
          label="RP"
        />
      </div>
    );
  };