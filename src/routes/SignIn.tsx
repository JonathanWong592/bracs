import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AnimatedMountView,
  Button,
  Text,
  TextInput,
  TouchableDiv,
} from "../components/general";
import colors from "../constants/Colors";

const SignInRoute: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AnimatedMountView styles={{ width: 320, marginTop: 64 }}>
      <Text weight="medium" fontSize={24} style={styles.header}>
        Sign In
      </Text>
      <TextInput
        iconSize={12}
        icon="user"
        placeholderText="Username or Email"
        onChangeText={() => {}}
        containerStyles={styles.input}
      />
      <TextInput
        icon="key"
        inputType="password"
        placeholderText="Password"
        onChangeText={() => {}}
        showContentToggle
        containerStyles={styles.input}
      />
      <div style={styles.buttons}>
        <Button
          isLoading={isLoading}
          text="Login"
          onClick={() => setIsLoading(true)}
        />
        <div style={styles.spacer} />
        <Button
          iconSize={18}
          icon="google"
          text="Continue with Google"
          buttonTextProps={{ color: colors.navy1 }}
          buttonStyles={{ backgroundColor: "white" }}
          containerStyles={styles.input}
        />
      </div>
      <TouchableDiv style={styles.footer}>
        <Link to="signup" style={styles.link}>
          <Text color={colors.gray1} fontSize={12}>
            Need an Account? Click to Sign Up
          </Text>
        </Link>
      </TouchableDiv>
    </AnimatedMountView>
  );
};

const styles: StyleSheetCSS = {
  input: {
    marginBottom: 16,
  },
  buttons: {
    marginTop: 32,
  },
  header: {
    marginBottom: 32,
  },
  footer: {
    marginTop: 24,
    display: "flex",
    justifyContent: "center",
  },
  spacer: {
    height: 12,
  },
  link: {
    textDecoration: "none",
  },
};

export default SignInRoute;
