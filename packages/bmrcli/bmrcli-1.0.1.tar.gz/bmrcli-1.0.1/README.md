# bmrcli

Command-line utility for managing BMR HC64 heating controller configuration.

Features:

- save controller configuration into a YAML file
- load controller configuration from a YAML file

Product page: https://www.bmr.cz/produkty/regulace-topeni/rnet


## Usage

To get the current config from the heating controller:

```
bmrcli --url http://192.168.1.32 --username admin --password 1234 get
```

To load configuration into the heating controller:

```
bmrcli --url http://192.168.1.32 --username admin --password 1234 apply
```

# License

MIT
