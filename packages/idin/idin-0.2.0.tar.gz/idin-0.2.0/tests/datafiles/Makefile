all: clean idx_trx_response.xml idx_status_response.xml idx_status_response_denied.xml

idx_trx_response.xml:
	xmlsec1 --sign --privkey-pem ../keys/acquirer_key.pem --output idx_trx_response.xml idx_trx_response_unsigned.xml

idx_status_response.xml:

	# Format
	xmllint -format idx_status_response_unsigned.xml > idx_status_response_intermediate.xml

	# Step 1: Encrypt attributes and name id (TODO)

	# Step 2: Sign SAML assertion
	xmlsec1 --sign --node-id signature-2  --id-attr:ID urn:oasis:names:tc:SAML:2.0:assertion:Assertion --pwd "" --pkcs12 ../keys/acquirer.p12 --output idx_status_response_intermediate.xml idx_status_response_intermediate.xml

	# Step 3: Sign IDX message
	xmlsec1 --sign --node-id signature-1 --privkey-pem ../keys/acquirer_key.pem --output idx_status_response.xml idx_status_response_intermediate.xml
	rm idx_status_response_intermediate.xml


idx_status_response_denied.xml:

	# Format
	xmllint -format idx_status_response_denied_unsigned.xml > idx_status_response_intermediate.xml

	# Sign IDX message
	xmlsec1 --sign --privkey-pem ../keys/acquirer_key.pem --output idx_status_response_denied.xml idx_status_response_intermediate.xml
	rm idx_status_response_intermediate.xml

idx_status_response_error.xml:

	# Format
	xmllint -format idx_status_response_error_unsigned.xml > idx_status_response_intermediate.xml

	# Sign IDX message
	xmlsec1 --sign --privkey-pem ../keys/acquirer_key.pem --output idx_status_response_error.xml idx_status_response_intermediate.xml
	rm idx_status_response_intermediate.xml


clean:
	rm -f idx_trx_response.xml
	rm -f idx_status_response.xml
	rm -f idx_status_response_error.xml
