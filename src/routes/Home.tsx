import { AnimatedMountView, Button, Text } from "../components/general";
import colors from "../constants/Colors";

const HomeRoute: React.FC<{}> = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <AnimatedMountView delay={0.1}>
            <Text weight="bold" fontSize={64}>
              {"{ "}
            </Text>
          </AnimatedMountView>
          <AnimatedMountView delay={0.2} styles={styles.logo}>
            <Text weight="bold" fontSize={64}>
              BrACS
            </Text>
          </AnimatedMountView>
          <AnimatedMountView delay={0.1}>
            <Text weight="bold" fontSize={64}>
              {"}"}
            </Text>
          </AnimatedMountView>
        </div>
        <Text fontSize={24} color={colors.gray1} style={{ marginTop: 8 }}>
          Create simple, gorgeous brackets
        </Text>
      </div>
      <div style={styles.footer}>
        <Button linkTo="/make" margin text="Make a Bracket" />
        <Button linkTo="/login" margin text="Sign Up" />
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  page: {
    display: "flex",
    marginTop: 128,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  logoContainer: {
    display: "flex",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  logo: {
    marginLeft: 12,
    marginRight: 12,
  },
};

export default HomeRoute;
