from sookie_django_query.BetweenCondition import BetweenCondition
from sookie_django_query.CommonExpressBuilder import CommonExpressBuilder


class BetweenConditionBuilder(CommonExpressBuilder):
    def build(self, expression: BetweenCondition, params={}):
        operator = expression.getOperator()
        column = expression.getColumn()

        intervalStart = expression.getIntervalStart()
        self.addParams(intervalStart)
        intervalEnd = expression.getIntervalEnd()
        self.addParams(intervalEnd)

        return column + " " + operator + " " + "%s" + " AND " + "%s"
