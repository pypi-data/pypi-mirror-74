
acquirer.p12:
	openssl pkcs12 -export -out ../keys/acquirer.p12 -inkey ../keys/acquirer_key.pem  -in ../keys/acquirer_cert.pem  -passout pass: -nodes

clean:
	rm -f acquirer.p12
