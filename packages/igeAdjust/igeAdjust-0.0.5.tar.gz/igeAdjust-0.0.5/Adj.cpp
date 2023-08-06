#include "Adj.h"
#include "AdjustImpl.h"

Adj* Adj::instance = nullptr;

Adj::Adj()
	: m_adjustImpl(new AdjustImpl())
	, m_autoTest(false)
{
}
Adj::~Adj()
{
}

void Adj::init(const char* token, uint32_t secretId, uint32_t info1, uint32_t info2, uint32_t info3, uint32_t info4, bool debug, bool autoTest)
{
	m_autoTest = autoTest;

	m_adjustImpl->Init(token, secretId, info1, info2, info3, info4, debug);

	info_json["token"] = token;

	char secret[128];
	sprintf(secret, "(%lu, %lu, %lu, %lu, %lu)", secretId, info1, info2, info3, info4);
	info_json["secret"] = secret;

	info_json["debug"] = debug;
	info_json["adid"] = m_adjustImpl->getADID();
	info_json["event"] = json::array();
}

void Adj::release()
{
	m_adjustImpl->Release();
}

void Adj::logEvent(const char* eventType, std::map<std::string, std::string> eventValue)
{
	m_adjustImpl->logEvent(eventType, eventValue);

	if (m_autoTest)
	{
		info_json["event"].push_back(eventType);
	}
}
